<template>
  <div class="docs-page">
    <Navbar :links="navLinks" icon-label="VueLib" />

    <Layout type="flex" direction="col" gap="2rem" padding="6rem 1rem 3rem" :center="true">
      
      <Layout type="flex" direction="col" gap="0.5rem" :max-width="800" style="margin-top:50px">
        <h1 class="page-title">Documentation</h1>
        <p class="page-subtitle">Component reference and usage guides</p>
      </Layout>
      
      <Layout type="grid" :auto-fill="false" min-width="280px" columns="1fr 1fr 1fr" gap="1rem">
        <Card
          v-for="doc in docs"
          :key="doc.name"
          :title="doc.name"
          :description="doc.description"
          cta-i18n="card.viewDetails"
          :clickable="true"
          :min-width="250"
          @click="openDoc(doc)"
        />
      </Layout>

    </Layout>

    <Modal v-model="ModalOpen" width="2000px" max-height="1000px">
      <Layout type="flex" direction="col" :full-height="false" class="modal-container" :max-width="800" :center="true">
              <Markdown :model-value="docContent" variant="minimal" highlight-theme="atomOneLight" />
        </Layout>
    </Modal>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Layout from "@/components/Layout.vue"
import Card from "@/components/Card.vue"
import Markdown from "@/components/Markdown.vue"
import Modal from "@/components/Modal.vue"

const docFiles = [
  'Alert.md',
  'Calendar.md',
  'Carousel.md',
  'DataChart.md',
  'DataLoader.md',
  'DataTable.md',
  'DynamicForm.md',
  'Fab.md',
  'Gantt.md',
  'Hero.md',
  'LanguageChanger.md',
  'Layout.md',
  'Markdown.md',
  'Modal.md',
  'Navbar.md',
  'ThemeChanger.md',
  'Card.md'
]

const docDescriptions = {
  'Alert.md': 'Toast-style alert with types',
  'Calendar.md': 'Event calendar with day modal',
  'Carousel.md': 'Multi-variant carousel',
  'DataChart.md': 'Chart.js wrapper',
  'DataLoader.md': 'Loading states component',
  'DataTable.md': 'Sortable, filtering table',
  'DynamicForm.md': 'Dynamic form builder',
  'Fab.md': 'Floating action button',
  'Gantt.md': 'Gantt chart for tasks',
  'Hero.md': 'Hero section demo',
  'LanguageChanger.md': 'EN/IT language switcher',
  'Layout.md': 'CSS Grid/Flex wrapper',
  'Markdown.md': 'Markdown renderer',
  'Modal.md': 'Modal dialog wrapper',
  'Navbar.md': 'Navigation bar',
  'ThemeChanger.md': 'Light/dark theme toggle',
  'Card.md': 'A card' ,
}

export default {
  name: 'DocsView',

  components: {
    Navbar,
    Layout,
    Card,
    Markdown,
    Modal,
  },

  data() {
    return {
      navLinks: [
        { name: 'Home', link: '/home' },
        { name: 'Docs', link: '/docs' },
      ],
      ModalOpen: false,
      selectedDoc: null,
      docContent: '',
      docs: docFiles.map(file => ({
        name: file.replace('.md', ''),
        description: docDescriptions[file] || '',
        file: file
      })),
    }
  },

  methods: {
    async openDoc(doc) {
      this.selectedDoc = doc
      this.ModalOpen = true
      
      try {
        const response = await fetch(`/docs/${doc.file}`)
        this.docContent = await response.text()
      } catch (error) {
        console.error('Error loading doc:', error)
        this.docContent = '# Error\nCould not load documentation.'
      }
    },
  },
}
</script>

<style scoped>
.docs-page {
  position: relative;
  background-color: var(--background);
  min-height: 100vh;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--foreground);
  margin: 0;
}

.page-subtitle {
  font-size: 1.1rem;
  color: color-mix(in srgb, var(--foreground) 60%, transparent);
  margin: 0;
}
</style>
