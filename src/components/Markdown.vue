<template>
  <component
    :is="tag"
    class="markdown-content"
    :class="[
      `markdown--${variant}`,
      {
        'markdown--prose': prose,
        'markdown--no-margin': noMargin,
        'markdown--compact': compact,
      },
    ]"
    :style="contentStyle"
    v-html="renderedContent"
  />
</template>

<script>
import { mapState } from 'pinia';
import { useGenericStore } from '@/stores/generic';

const CDN = {
  marked: 'https://cdn.jsdelivr.net/npm/marked@12.0.0/marked.min.js',
  highlight: 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/lib/common.min.js',
}

const CSS = {
  github: 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github.min.css',
  githubDark: 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github-dark.min.css',
  atomOneDark: 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/atom-one-dark.min.css',
  atomOneLight: 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/atom-one-light.min.css',
  nord: 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/nord.min.css',
  monokai: 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/monokai.min.css',
  dracula: 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/dracula.min.css',
  vitesse: 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/base16/material.min.css',
}

const loadedScripts = {}
const loadedStyles = {}

function loadScript(src) {
  if (loadedScripts[src]) return loadedScripts[src]
  loadedScripts[src] = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve())
      return
    }
    const el = document.createElement('script')
    el.src = src
    el.onload = () => resolve()
    el.onerror = () => reject(new Error(`Failed to load: ${src}`))
    document.head.appendChild(el)
  })
  return loadedScripts[src]
}

function loadStyle(href) {
  if (loadedStyles[href]) return
  loadedStyles[href] = true
  if (document.querySelector(`link[href="${href}"]`)) return
  const el = document.createElement('link')
  el.rel = 'stylesheet'
  el.href = href
  document.head.appendChild(el)
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export default {
  name: 'MarkdownViewer',

  props: {
    modelValue: {
      type: String,
      default: '',
    },

    tag: {
      type: String,
      default: 'div',
    },

    variant: {
      type: String,
      default: 'default',
      validator: (v) => ['default', 'minimal', 'docs', 'blog', 'chat'].includes(v),
    },

    prose: {
      type: Boolean,
      default: true,
    },

    breaks: {
      type: Boolean,
      default: true,
    },

    gfm: {
      type: Boolean,
      default: true,
    },

    highlight: {
      type: Boolean,
      default: true,
    },

    highlightTheme: {
      type: String,
      default: 'auto',
      validator: (v) => ['auto', 'github', 'githubDark', 'atomOneDark', 'atomOneLight', 'nord', 'monokai', 'dracula', 'vitesse'].includes(v),
    },

    showCopyButton: {
      type: Boolean,
      default: true,
    },

    showLanguageLabel: {
      type: Boolean,
      default: true,
    },

    lineNumbers: {
      type: Boolean,
      default: false,
    },

    linkTarget: {
      type: String,
      default: '_blank',
      validator: (v) => ['_blank', '_self', '_parent', '_top', ''].includes(v),
    },

    linkRel: {
      type: String,
      default: 'noopener noreferrer',
    },

    headingIds: {
      type: Boolean,
      default: false,
    },

    headingPrefix: {
      type: String,
      default: '',
    },

    compact: {
      type: Boolean,
      default: false,
    },

    noMargin: {
      type: Boolean,
      default: false,
    },

    fontSize: {
      type: String,
      default: null,
    },

    maxWidth: {
      type: String,
      default: null,
    },

    customStyles: {
      type: Object,
      default: null,
    },

    copyLabel: {
      type: String,
      default: 'Copy',
    },

    copiedLabel: {
      type: String,
      default: 'Copied!',
    },
  },

  emits: ['loaded', 'error', 'link-click'],

  data() {
    return {
      markedInstance: null,
      hlInstance: null,
      loadError: null,
      isLoaded: false,
    }
  },

  computed: {
    ...mapState(useGenericStore, ['language', 'theme']),

    resolvedTheme() {
      if (this.highlightTheme !== 'auto') return this.highlightTheme
      return this.theme === 'dark' ? 'atomOneDark' : 'github'
    },

    renderedContent() {
      if (!this.modelValue || !this.markedInstance) return ''

      try {
        const renderer = new this.markedInstance.Renderer()

        renderer.code = function(code, lang) {
          code = String(code)
          const langStr = typeof lang === 'string' ? lang : (lang?.lang || '')
          const validLang = langStr && this.hlInstance?.getLanguage(langStr) ? langStr : null
          let highlighted

          if (this.highlight && this.hlInstance && validLang) {
            highlighted = this.hlInstance.highlight(code, { language: validLang }).value
          } else {
            highlighted = escapeHtml(code)
          }

          if (this.lineNumbers) {
            const lines = highlighted.split('\n')
            const numbered = lines
              .map((line, i) => `<span class="md-line"><span class="md-line-num">${i + 1}</span>${line}</span>`)
              .join('\n')
            highlighted = `<span class="md-lines">${numbered}</span>`
          }

          const langLabel = this.showLanguageLabel && langStr
            ? `<span class="md-code-lang">${escapeHtml(langStr)}</span>`
            : ''

          const copyBtn = this.showCopyButton
            ? `<button class="md-copy-btn" data-code="${escapeHtml(code)}" type="button">${this.copyLabel}</button>`
            : ''

          const header = langLabel || copyBtn
            ? `<div class="md-code-header">${langLabel}${copyBtn}</div>`
            : ''

          return `<div class="md-code-block">${header}<pre class="md-pre${validLang ? ` language-${langStr}` : ''}"><code class="md-code${validLang ? ` hljs language-${validLang}` : ''}">${highlighted}</code></pre></div>`
        }.bind(this)

        renderer.link = (href, title, text) => {
          const target = this.linkTarget ? ` target="${this.linkTarget}"` : ''
          const rel = this.linkRel ? ` rel="${this.linkRel}"` : ''
          const t = title ? ` title="${escapeHtml(title)}"` : ''
          return `<a href="${href}"${t}${target}${rel} class="md-link">${text}</a>`
        }

        if (this.headingIds) {
          renderer.heading = (text, level) => {
            const slug = `${this.headingPrefix}${text.toLowerCase().replace(/[^\w]+/g, '-')}`
            return `<h${level} id="${slug}" class="md-heading md-h${level}"><a class="md-anchor" href="#${slug}" aria-hidden="true">#</a>${text}</h${level}>`
          }
        }

        renderer.image = (href, title, text) => {
          const t = title ? ` title="${escapeHtml(title)}"` : ''
          const a = text ? ` alt="${escapeHtml(text)}"` : ''
          return `<figure class="md-figure"><img src="${href}"${a}${t} class="md-img" loading="lazy" />${text ? `<figcaption class="md-caption">${escapeHtml(text)}</figcaption>` : ''}</figure>`
        }

        this.markedInstance.setOptions({ breaks: this.breaks, gfm: this.gfm, renderer })
        return this.markedInstance.parse(this.modelValue)
      } catch (e) {
        this.loadError = e.message
        this.$emit('error', e)
        return `<p class="md-error">Error parsing markdown: ${escapeHtml(e.message)}</p>`
      }
    },

    contentStyle() {
      const style = {}
      if (this.fontSize) style.fontSize = this.fontSize
      if (this.maxWidth) style.maxWidth = this.maxWidth
      return { ...style, ...(this.customStyles || {}) }
    },
  },

  async mounted() {
    try {
      await loadScript(CDN.marked)
      this.markedInstance = window.marked

      if (this.highlight) {
        await loadScript(CDN.highlight)
        this.hlInstance = window.hljs
      }

      this.applyHighlightTheme()
      this.isLoaded = true
      this.$emit('loaded')
    } catch (e) {
      this.loadError = e.message
      this.$emit('error', e)
    }

    this.$el.addEventListener('click', this.handleClick)
  },

  beforeUnmount() {
    this.$el?.removeEventListener('click', this.handleClick)
  },

  watch: {
    resolvedTheme() {
      this.applyHighlightTheme()
    },
    modelValue() {
      if (this.markedInstance && !this.isLoaded) {
        this.isLoaded = true
      }
    },
  },

  methods: {
    applyHighlightTheme() {
      if (!this.highlight) return
      const href = CSS[this.resolvedTheme]
      if (href) loadStyle(href)
    },

    handleClick(e) {
      const btn = e.target.closest('.md-copy-btn')
      if (btn) {
        const code = btn.dataset.code || ''
        navigator.clipboard?.writeText(code).then(() => {
          const prev = btn.textContent
          btn.textContent = this.copiedLabel
          btn.classList.add('md-copy-btn--copied')
          setTimeout(() => {
            btn.textContent = prev
            btn.classList.remove('md-copy-btn--copied')
          }, 2000)
        })
        return
      }

      const anchor = e.target.closest('.md-link')
      if (anchor) {
        this.$emit('link-click', { href: anchor.href, event: e })
      }
    },
  },
}
</script>

<style scoped>
.markdown-content {
  font-family: var(--font-family);
  color: var(--foreground);
  line-height: 1.7;
  box-sizing: border-box;
}

.markdown--default { font-size: 1rem; }
.markdown--minimal { font-size: 0.875rem; }
.markdown--docs    { font-size: 0.9375rem; }
.markdown--blog    { font-size: 1.0625rem; }
.markdown--chat    { font-size: 0.9375rem; line-height: 1.6; }

.markdown--compact :deep(p),
.markdown--compact :deep(ul),
.markdown--compact :deep(ol),
.markdown--compact :deep(blockquote) {
  margin-bottom: 0.5em;
}

.markdown--no-margin :deep(> *:first-child) { margin-top: 0; }
.markdown--no-margin :deep(> *:last-child)  { margin-bottom: 0; }

.markdown--prose :deep(.md-heading) {
  margin: 1.5em 0 0.5em;
  font-weight: 600;
  line-height: 1.3;
  color: var(--foreground);
  position: relative;
}

.markdown--prose :deep(.md-h1) {
  font-size: 2rem;
  padding-bottom: 0.5em;
  border-bottom: 2px solid color-mix(in srgb, var(--foreground) 12%, transparent);
}

.markdown--prose :deep(.md-h2) {
  font-size: 1.5rem;
  padding-bottom: 0.25em;
  border-bottom: 1px solid color-mix(in srgb, var(--foreground) 8%, transparent);
}

.markdown--prose :deep(.md-h3) { font-size: 1.25rem; }
.markdown--prose :deep(.md-h4) { font-size: 1.125rem; }
.markdown--prose :deep(.md-h5) { font-size: 1rem; }

.markdown--prose :deep(.md-h6) {
  font-size: 0.875rem;
  color: color-mix(in srgb, var(--foreground) 65%, transparent);
}

.markdown--prose :deep(h1):not(.md-heading),
.markdown--prose :deep(h2):not(.md-heading),
.markdown--prose :deep(h3):not(.md-heading),
.markdown--prose :deep(h4):not(.md-heading),
.markdown--prose :deep(h5):not(.md-heading),
.markdown--prose :deep(h6):not(.md-heading) {
  margin: 1.5em 0 0.5em;
  font-weight: 600;
  line-height: 1.3;
}

.markdown--prose :deep(.md-anchor) {
  position: absolute;
  left: -1.2em;
  opacity: 0;
  text-decoration: none;
  color: var(--primary, currentColor);
  font-weight: 400;
  transition: opacity 0.15s;
}

.markdown--prose :deep(.md-heading:hover .md-anchor) {
  opacity: 0.5;
}

.markdown--prose :deep(p) {
  margin: 0 0 1em;
}

.markdown--prose :deep(.md-link) {
  color: var(--primary);
  text-decoration: none;
  border-bottom: 1px solid color-mix(in srgb, var(--primary) 40%, transparent);
  transition: border-color 0.15s;
}

.markdown--prose :deep(.md-link:hover) {
  border-color: var(--primary);
}

.markdown--prose :deep(strong) { font-weight: 600; }
.markdown--prose :deep(em)     { font-style: italic; }

.markdown--prose :deep(code):not(.md-code) {
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.875em;
  padding: 0.15em 0.4em;
  border-radius: 4px;
  background: color-mix(in srgb, var(--foreground) 8%, transparent);
}

.markdown--prose :deep(.md-code-block) {
  margin: 1em 0;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--foreground) 10%, transparent);
}

.markdown--prose :deep(.md-code-header) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0.75rem;
  background: color-mix(in srgb, var(--foreground) 7%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--foreground) 8%, transparent);
  min-height: 2rem;
}

.markdown--prose :deep(.md-code-lang) {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: color-mix(in srgb, var(--foreground) 55%, transparent);
  font-weight: 600;
}

.markdown--prose :deep(.md-copy-btn) {
  font-family: var(--font-family);
  font-size: 0.7rem;
  padding: 0.2em 0.6em;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, var(--foreground) 18%, transparent);
  background: transparent;
  color: color-mix(in srgb, var(--foreground) 60%, transparent);
  cursor: pointer;
  transition: all 0.15s;
  line-height: 1.4;
}

.markdown--prose :deep(.md-copy-btn:hover) {
  background: color-mix(in srgb, var(--foreground) 8%, transparent);
  color: var(--foreground);
  border-color: color-mix(in srgb, var(--foreground) 30%, transparent);
}

.markdown--prose :deep(.md-copy-btn--copied) {
  color: var(--success, #22c55e);
  border-color: var(--success, #22c55e);
}

.markdown--prose :deep(.md-pre) {
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
  background: color-mix(in srgb, var(--foreground) 4%, transparent);
}

.markdown--prose :deep(.md-code) {
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.8125rem;
  line-height: 1.65;
  background: transparent !important;
  padding: 0;
}

.markdown--prose :deep(.md-lines) {
  display: table;
  width: 100%;
}

.markdown--prose :deep(.md-line) {
  display: table-row;
}

.markdown--prose :deep(.md-line-num) {
  display: table-cell;
  padding-right: 1.25em;
  text-align: right;
  user-select: none;
  color: color-mix(in srgb, var(--foreground) 30%, transparent);
  min-width: 2em;
  font-size: 0.8em;
}

.markdown--prose :deep(blockquote) {
  margin: 1em 0;
  padding: 0.6em 1.1rem;
  border-left: 3px solid var(--primary);
  background: color-mix(in srgb, var(--primary) 6%, transparent);
  color: color-mix(in srgb, var(--foreground) 80%, transparent);
  border-radius: 0 6px 6px 0;
}

.markdown--prose :deep(blockquote p) {
  margin: 0;
}

.markdown--prose :deep(ul),
.markdown--prose :deep(ol) {
  margin: 0 0 1em;
  padding-left: 1.5em;
}

.markdown--prose :deep(li) {
  margin: 0.3em 0;
}

.markdown--prose :deep(ul li::marker) {
  color: var(--primary);
}

.markdown--prose :deep(ol li::marker) {
  color: var(--primary);
  font-weight: 600;
}

.markdown--prose :deep(hr) {
  margin: 2em 0;
  border: none;
  border-top: 1px solid color-mix(in srgb, var(--foreground) 12%, transparent);
}

.markdown--prose :deep(.md-figure) {
  margin: 1.25em 0;
  text-align: center;
}

.markdown--prose :deep(.md-img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
}

.markdown--prose :deep(.md-caption) {
  margin-top: 0.4em;
  font-size: 0.8125em;
  color: color-mix(in srgb, var(--foreground) 55%, transparent);
  font-style: italic;
}

.markdown--prose :deep(table) {
  width: 100%;
  margin: 1em 0;
  border-collapse: collapse;
}

.markdown--prose :deep(th),
.markdown--prose :deep(td) {
  padding: 0.65em 0.85em;
  border: 1px solid color-mix(in srgb, var(--foreground) 12%, transparent);
  text-align: left;
}

.markdown--prose :deep(th) {
  background: color-mix(in srgb, var(--foreground) 6%, transparent);
  font-weight: 600;
}

.markdown--prose :deep(tr:nth-child(even) td) {
  background: color-mix(in srgb, var(--foreground) 2.5%, transparent);
}

.markdown--prose :deep(.md-error) {
  color: var(--error, #ef4444);
  padding: 0.75rem 1rem;
  background: color-mix(in srgb, var(--error, #ef4444) 10%, transparent);
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--error, #ef4444) 30%, transparent);
  font-size: 0.875em;
}
</style>