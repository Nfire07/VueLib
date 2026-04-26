<template>
  <div class="home">
    <Navbar :links="navLinks" icon-label="VueLib" style="margin-bottom:2rem"/>

    <Layout type="flex" direction="col" gap="3rem" padding="6rem 1rem 3rem" :center="true">
      
      <!-- ALERT -->
      <Layout type="flex" direction="col" gap="1rem" :max-width="600" style="margin-top:50px">
        <h2 class="section-title">Alert</h2>
        <Alert type="success" title="Success" message="Operation completed successfully" :timeout="5000" />
        <Alert type="error" title="Error" message="Something went wrong" />
        <Alert type="warning" title="Warning" message="Please review your settings" />
        <Alert type="info" title="Info" message="New version available" />
      </Layout>

      <!-- MODAL -->
      <Layout type="flex" direction="col" gap="1rem">
        <h2 class="section-title">Modal</h2>
        <button class="btn" @click="modalOpen = true">Open Modal</button>
        <Modal v-model="modalOpen" width="500px">
          <h3>Modal Content</h3>
          <p>This is a modal dialog example.</p>
        </Modal>
      </Layout>

        <Fab
          icon="add"
          position="bottom-right"
          :offset="10"
          :actions="fabActions"
        />

      <!-- CAROUSEL -->
      <Layout type="flex" direction="col" gap="1rem" :max-width="900">
        <h2 class="section-title">Carousel</h2>
        <Carousel :items="carouselItems" variant="classic" cta-label="View More" />
      </Layout>

      <!-- DATATABLE -->
      <Layout type="flex" direction="col" gap="1rem" :max-width="900">
        <h2 class="section-title">DataTable</h2>
        <DataTable :columns="tableColumns" :rows="tableRows" @row-click="handleRowClick" />
      </Layout>

      <!-- DATACHART -->
      <Layout type="flex" gap="1.5rem" wrap="true" justify-content="center">
        <Layout type="flex" direction="col" gap="1rem">
          <h2 class="section-title">DataChart</h2>
          <DataChart type="line" title="Sales Trend" :labels="chartLabels" :datasets="chartDatasets" height="300px" :width="400" />
        </Layout>
        <Layout type="flex" direction="col" gap="1rem">
          <h2>&nbsp;</h2>
          <DataChart type="bar" title="Monthly Sales" :labels="chartLabels" :datasets="chartDatasets" height="300px" :width="400" />
        </Layout>
        <Layout type="flex" direction="col" gap="1rem">
          <h2>&nbsp;</h2>
          <DataChart type="pie" title="Distribution" :labels="pieLabels" :datasets="pieDatasets" height="300px" :width="400" />
        </Layout>
      </Layout>

      <!-- DATALOADER -->
      <Layout type="flex" direction="col" gap="1rem" :max-width="400">
        <h2 class="section-title">DataLoader</h2>
        <DataLoader url="https://jsonplaceholder.typicode.com/users" v-slot="{ data }">
          <div v-if="data">
            <p>Loaded {{ data.length }} users</p>
          </div>
        </DataLoader>
      </Layout>

      <!-- DYNAMICFORM -->
      <Layout type="flex" direction="col" gap="1rem" :max-width="500">
        <h2 class="section-title">DynamicForm</h2>
        <DynamicForm :fields="formFields" submit-text="Submit" @submit-form="handleFormSubmit" />
      </Layout>

      <!-- CALENDAR -->
      <Layout type="flex" direction="col" gap="1rem">
        <h2 class="section-title">Calendar</h2>
        <Calendar :events="calendarEvents" />
      </Layout>

      <!-- GANTT -->
      <Layout type="flex" direction="col" gap="1rem">
        <h2 class="section-title">Gantt</h2>
        <Gantt :tasks="ganttTasks" />
      </Layout>

      <!-- LAYOUT -->
      <Layout type="flex" direction="col" gap="1rem">
        <h2 class="section-title">Layout</h2>
        <Layout type="grid" :columns="3" gap="1rem">
          <div class="demo-box">Grid 1</div>
          <div class="demo-box">Grid 2</div>
          <div class="demo-box">Grid 3</div>
        </Layout>
      </Layout>

      <!-- MARKDOWN -->
      <Layout type="flex" direction="col" gap="1rem" :max-width="700">
        <h2 class="section-title">Markdown</h2>
        <Markdown v-model="sampleMarkdown" variant="docs" />
      </Layout>

    </Layout>

    <!-- Hero is rendered at the top as a banner -->
    <Layout type="flex" direction="col" gap="1rem" :max-width="1000" :center="true">
      <h2 class="section-title">Hero</h2>
      <Hero />
    </Layout>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Hero from "@/components/Hero.vue"
import Carousel from "@/components/Carousel.vue"
import DynamicForm from "@/components/DynamicForm.vue"
import Calendar from "@/components/Calendar.vue"
import Gantt from "@/components/Gantt.vue"
import DataTable from "@/components/DataTable.vue"
import Alert from "@/components/Alert.vue"
import Fab from "@/components/Fab.vue"
import DataLoader from "@/components/DataLoader.vue"
import Layout from "@/components/Layout.vue"
import DataChart from "@/components/DataChart.vue"
import Modal from "@/components/Modal.vue"
import LanguageChanger from "@/components/LanguageChanger.vue"
import ThemeChanger from "@/components/ThemeChanger.vue"
import Markdown from "@/components/Markdown.vue"

export default {
  name: 'HomeView',

  components: {
    Navbar,
    Hero,
    Carousel,
    DynamicForm,
    Calendar,
    Gantt,
    DataTable,
    Alert,
    Fab,
    DataLoader,
    Layout,
    DataChart,
    Modal,
    LanguageChanger,
    ThemeChanger,
    Markdown,
  },

  data() {
    return {
      navLinks: [
        { name: 'Home', link: '/home' },
        { name: 'Components', link: '/home' },
        { name: 'Docs', link: '/docs' },
        { name: 'GitHub', link: 'https://github.com/Nfire07/VueLib' },
      ],
      modalOpen: false,
      fabActions: [
        { icon: 'edit', label: 'Edit', handler: () => console.log('edit') },
        { icon: 'share', label: 'Share', handler: () => console.log('share') },
        { icon: 'delete', label: 'Delete', handler: () => console.log('delete') }
      ],

      carouselItems: [
        { title: 'Feature One', description: 'Description for feature one', tag: 'New', color: '#3b82f6' },
        { title: 'Feature Two', description: 'Description for feature two', tag: 'Popular', color: '#22c55e' },
        { title: 'Feature Three', description: 'Description for feature three', tag: 'Pro', color: '#f59e0b' },
      ],

      tableColumns: [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'email', label: 'Email' },
      ],
      tableRows: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Wilson', email: 'bob@example.com' },
      ],

      chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      chartDatasets: [{ label: 'Sales', data: [120, 190, 140, 220, 180, 260] }],
      pieLabels: ['A', 'B', 'C', 'D'],
      pieDatasets: [{ data: [30, 25, 25, 20] }],

      formFields: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'role', label: 'Role', type: 'select', options: [{ label: 'Admin', value: 'admin' }, { label: 'User', value: 'user' }] },
      ],

      calendarEvents: [{ date: new Date(), title: 'Meeting', time: '10:00', description: 'Team standup' }],
      ganttTasks: [
        { id: 1, name: 'Task 1', start: new Date(2026, 3, 1), end: new Date(2026, 3, 5), progress: 100, color: '#22c55e' },
        { id: 2, name: 'Task 2', start: new Date(2026, 3, 3), end: new Date(2026, 3, 8), progress: 50, color: '#3b82f6' },
      ],

      sampleMarkdown: `# Markdown Example

## Introduction

This is a **markdown** rendered content with *prose* styling.

### Features

- Renders markdown to HTML
- Prose styling
- Theme compatible

### Code Example

\`\`\`javascript
const hello = "world";
console.log(hello);
\`\`\`

> This is a blockquote

[Link to documentation](#)

---

End of markdown`,
    }
  },

  methods: {
    handleRowClick(row) { console.log('Row clicked:', row) },
    handleFormSubmit(data) { console.log('Form submitted:', data) },
  }
}
</script>

<style scoped>
.home {
  position: relative;
  background-color: var(--background);
  min-height: 100vh;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--foreground);
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid color-mix(in srgb, var(--primary) 30%, transparent);
}

.demo-box {
  padding: 2rem;
  background: color-mix(in srgb, var(--primary) 10%, transparent);
  border-radius: 8px;
  text-align: center;
  color: var(--foreground);
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid color-mix(in srgb, var(--foreground) 20%, transparent);
  background: var(--primary);
  color: var(--foreground);
  cursor: pointer;
  width: fit-content;
}

.btn:hover {
  opacity: 0.9;
}
</style>