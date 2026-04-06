<template>
  <div class="page">
    <navbar :links="links" :icon-label="'Non solo stampe<hr>Anche <strong>cuore</strong>'" />
    <hero />

    <section class="page__section">
      <div class="page__container">
        <h2 class="page__section-title">In Evidenza</h2>
        <Carousel
          variant="hero"
          :items="promoItems"
          :autoplay="true"
          :autoplayDelay="5000"
          ctaLabel="Approfittane ora"
        />
      </div>
    </section>

    <section class="page__section page__section--light">
      <div class="page__container">
        <h2 class="page__section-title">I Nostri Prodotti</h2>
        <p class="page__section-subtitle">Diamo forma alle tue idee con stampe di altissima qualità.</p>
        <Carousel
          variant="classic"
          :items="productItems"
          ctaLabel="Dettagli prodotto"
        />
      </div>
    </section>

    <section class="page__section page__section--light">
      <div class="page__container">
        <h2 class="page__section-title">Richiedi un Preventivo</h2>
        <DynamicForm
          :fields="formSchema"
          submitText="Invia Richiesta"
          @submit-form="gestisciInvio"
        />
      </div>
    </section>

    <section class="page__section page__section--light">
      <div class="page__container">
        <h2 class="page__section-title">Notifiche</h2>
        <div class="alerts-stack">
          <Alert
            type="success"
            title="Ordine confermato"
            message="Il tuo ordine #4821 è stato ricevuto e verrà elaborato entro 24 ore."
            :dismissible="true"
            :timeout="8000"
            v-model="alertSuccess"
            @dismiss="alertSuccess = false"
          />
          <Alert
            type="info"
            title="Nuovo listino prezzi"
            message="Dal 1° maggio sono attivi i nuovi prezzi per la stampa digitale su grande formato."
            :dismissible="true"
            v-model="alertInfo"
            @dismiss="alertInfo = false"
          />
          <Alert
            type="warning"
            title="Consegne rallentate"
            message="A causa di festività, i tempi di consegna potrebbero subire ritardi di 1-2 giorni lavorativi."
            :dismissible="true"
            v-model="alertWarning"
            @dismiss="alertWarning = false"
          />
          <Alert
            type="error"
            title="Pagamento non riuscito"
            message="Impossibile completare il pagamento. Verifica i dati della carta e riprova."
            :dismissible="true"
            v-model="alertError"
            @dismiss="alertError = false"
          />
        </div>
      </div>
    </section>

    <section class="page__section page__section--light calendar-section-wrapper">
      <div class="page__container">
        <h2 class="page__section-title">Visualizza un Calendario</h2>
        <Calendar
          :events="myEvents"
          :on-add-event="handleAdd"
        />
      </div>
    </section>

    <section class="page__section page__section--light">
      <div class="page__container">
        <h2 class="page__section-title">Gantt</h2>
        <Gantt />
      </div>
    </section>

    <section class="page__section page__section--light">
      <div class="page__container">
        <h2 class="page__section-title">Tabella</h2>
        <DataTable
          :columns="columns"
          :rows="rows"
          @row-click="handleRowClick"
        />
      </div>
    </section>

    <Fab
      icon="settings"
      position="bottom-right"
      :offset="32"
      :show-labels="false"
      :actions="[
        { icon: 'edit', label: 'Edit', handler: () => console.log('edit') },
        { icon: 'share', label: 'Share', handler: () => console.log('share') },
        { icon: 'delete', label: 'Delete', handler: () => console.log('delete') }
      ]"
      @action="onAction"
      @open="onOpen"
      @close="onClose"
    />
    
    <!-- <Layout type="1fr 1fr" gap="2rem">
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <DataTable
          :columns="columns"
          :rows="rows"
          @row-click="handleRowClick"
        />
      <DataTable
          :columns="columns"
          :rows="rows"
          @row-click="handleRowClick"
        />
    </Layout> -->
   
    <!-- <Layout type="grid" :auto-fill="true" min-width="250px">
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
    </Layout> -->

    <!-- <Layout type="col" align="right" justify="space-between">
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
    </Layout> -->

    <!-- <Layout type="flex" max-width="1200px" :center="true" padding="0 1.5rem">
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
    </Layout> -->

    <!-- <Layout type="grid" columns="200px 1fr" rows="auto 1fr auto"
    :areas="['sidebar main', 'sidebar main', 'footer footer']">
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
    </Layout> -->

    <!-- <Layout margin="1rem 2rem 0 2rem" type="2" row-gap="1.5rem" column-gap="2rem">
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
      <div class="layout-element"></div>
    </Layout> -->



    <!-- Text example -->
    <Layout type="grid" margin="2rem 2rem 2rem 2rem" columns="auto 1fr" :wrap="false" align="start">
      <img src="../assets/favicon.png" alt="ICONa" style="width: 10rem;" />
      <p style="text-align: justify;"><span style="font-size: 25px;font-weight: 800;">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi, consectetur cum ipsam inventore in recusandae, necessitatibus, quod quidem incidunt voluptate nemo amet quis doloremque nobis dolorum laborum similique alias.
      Hic voluptatum quam saepe delectus velit. Dolore enim repellendus, totam saepe dolorum aut nisi voluptate quia dolor, deserunt vel. Voluptas cupiditate voluptate id dolor quae laudantium quos, reiciendis obcaecati deserunt.
      Tempora temporibus blanditiis odit sed quo repellendus, quam, mollitia ut culpa, voluptas atque a labore vitae perferendis qui aliquid? Possimus ad fuga hic ipsum laborum perferendis earum iure nesciunt eum!
      Libero iste dignissimos deserunt dolorem porro blanditiis amet laboriosam, dolorum, exercitationem officiis, ut suscipit doloremque voluptatum magni cupiditate? Doloribus minima ad, totam consequatur magni saepe expedita id possimus quaerat maxime?
      Veniam ipsam excepturi consequatur consequuntur possimus dignissimos magni assumenda obcaecati, accusantium reiciendis at deserunt quisquam et, mollitia eveniet voluptate vero cupiditate aspernatur! Impedit dignissimos sit voluptas odio iure voluptatum vitae!
      Dolorum voluptatibus id recusandae ullam expedita neque voluptatem cumque harum, quos nam, optio nemo earum repellat, ipsa vitae vero quidem laudantium fuga! Ducimus distinctio error illum numquam quo, debitis voluptatum?
      Facilis quae a quos iusto quis, assumenda error laborum culpa illum asperiores temporibus, nihil delectus similique praesentium? Voluptas quasi repudiandae voluptate veniam eligendi voluptates, eaque sequi impedit veritatis vero natus.
      Impedit sed cum inventore aut eligendi nulla saepe atque quam dolorem, animi ex non fugit omnis dolorum aliquam nam eos delectus. Ipsam qui molestiae magnam corrupti rem optio, architecto libero?
      Fugiat dignissimos omnis ex quas voluptas voluptates exercitationem quo veritatis incidunt doloribus. Delectus repudiandae qui aliquam facilis illum totam veniam ipsum saepe quaerat provident! Unde sit libero autem dolorem magni?
      </p>
      <img src="../assets/favicon.png" alt="ICONa" style="width: 10rem;" />
      <p style="text-align: justify;"><span style="font-size: 25px;font-weight: 800;">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi, consectetur cum ipsam inventore in recusandae, necessitatibus, quod quidem incidunt voluptate nemo amet quis doloremque nobis dolorum laborum similique alias.
      Hic voluptatum quam saepe delectus velit. Dolore enim repellendus, totam saepe dolorum aut nisi voluptate quia dolor, deserunt vel. Voluptas cupiditate voluptate id dolor quae laudantium quos, reiciendis obcaecati deserunt.
      Tempora temporibus blanditiis odit sed quo repellendus, quam, mollitia ut culpa, voluptas atque a labore vitae perferendis qui aliquid? Possimus ad fuga hic ipsum laborum perferendis earum iure nesciunt eum!
      Libero iste dignissimos deserunt dolorem porro blanditiis amet laboriosam, dolorum, exercitationem officiis, ut suscipit doloremque voluptatum magni cupiditate? Doloribus minima ad, totam consequatur magni saepe expedita id possimus quaerat maxime?
      Veniam ipsam excepturi consequatur consequuntur possimus dignissimos magni assumenda obcaecati, accusantium reiciendis at deserunt quisquam et, mollitia eveniet voluptate vero cupiditate aspernatur! Impedit dignissimos sit voluptas odio iure voluptatum vitae!
      Dolorum voluptatibus id recusandae ullam expedita neque voluptatem cumque harum, quos nam, optio nemo earum repellat, ipsa vitae vero quidem laudantium fuga! Ducimus distinctio error illum numquam quo, debitis voluptatum?
      Facilis quae a quos iusto quis, assumenda error laborum culpa illum asperiores temporibus, nihil delectus similique praesentium? Voluptas quasi repudiandae voluptate veniam eligendi voluptates, eaque sequi impedit veritatis vero natus.
      Impedit sed cum inventore aut eligendi nulla saepe atque quam dolorem, animi ex non fugit omnis dolorum aliquam nam eos delectus. Ipsam qui molestiae magnam corrupti rem optio, architecto libero?
      Fugiat dignissimos omnis ex quas voluptas voluptates exercitationem quo veritatis incidunt doloribus. Delectus repudiandae qui aliquam facilis illum totam veniam ipsum saepe quaerat provident! Unde sit libero autem dolorem magni?
      </p>
    </Layout>
    <Layout type="flex" max-width="800px" :center="true" padding="0 1.5rem">
      <DataChart
        type="line"
        title="Andamento vendite"
        subtitle="Dati mensili 2024"
        :labels="['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu']"
        :datasets="[
          { label: 'Prodotto A', data: [120, 190, 140, 220, 180, 260] },
          { label: 'Prodotto B', data: [80, 110, 90, 150, 130, 170] }
        ]"
        :fill="true"
        :tension="0.4"
        :show-legend="true"
        height="300px"
      />

      <DataChart
        type="bar"
        title="Vendite per area"
        :labels="['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu']"
        :datasets="[
          { label: 'Nord', data: [40, 55, 60, 70, 65, 80] },
          { label: 'Sud',  data: [30, 40, 50, 55, 60, 70] }
        ]"
        :stacked="true"
        y-label="Unità vendute"
        height="300px"
      />

      <DataChart
        type="bar"
        title="Performance per team"
        :labels="['Alfa', 'Beta', 'Gamma', 'Delta', 'Epsilon']"
        :datasets="[
          { label: 'Punteggio', data: [72, 58, 91, 43, 66] }
        ]"
        :horizontal="true"
        :show-legend="false"
        height="300px"
      />

      <DataChart
        type="pie"
        title="Distribuzione budget"
        :labels="['Design', 'Sviluppo', 'QA', 'Ops']"
        :datasets="[
          { data: [30, 45, 15, 10] }
        ]"
        :colors="['#ED202F', '#378ADD', '#1D9E75', '#EF9F27']"
        legend-position="bottom"
        height="300px"
      />

      <DataChart
        type="doughnut"
        title="Quota di mercato"
        :labels="['Design', 'Sviluppo', 'QA', 'Ops']"
        :datasets="[
          { data: [30, 45, 15, 10] }
        ]"
        :colors="['#ED202F', '#378ADD', '#1D9E75', '#EF9F27']"
        :options="{ cutout: '65%' }"
        legend-position="right"
        height="300px"
      />

      <DataChart
        type="radar"
        title="Confronto atleti"
        :labels="['Velocità', 'Potenza', 'Difesa', 'Stamina', 'Agilità', 'Tecnica']"
        :datasets="[
          { label: 'Atleta A', data: [80, 70, 60, 90, 75, 85] },
          { label: 'Atleta B', data: [60, 85, 80, 65, 90, 70] }
        ]"
        :options="{ scales: { r: { min: 0, max: 100 } } }"
        height="300px"
      />

      <DataChart
        type="polarArea"
        title="Risultati trimestrali"
        :labels="['Q1', 'Q2', 'Q3', 'Q4']"
        :datasets="[
          { data: [55, 70, 40, 85] }
        ]"
        :colors="['#ED202F', '#378ADD', '#1D9E75', '#EF9F27']"
        legend-position="bottom"
        height="300px"
      />

      <DataChart
        type="bubble"
        title="Distribuzione campagne"
        :labels="[]"
        :datasets="[
          {
            label: 'Gruppo A',
            data: [{ x: 10, y: 20, r: 8 }, { x: 25, y: 35, r: 14 }, { x: 40, y: 15, r: 10 }]
          },
          {
            label: 'Gruppo B',
            data: [{ x: 15, y: 50, r: 12 }, { x: 30, y: 10, r: 7 }, { x: 48, y: 38, r: 16 }]
          }
        ]"
        x-label="Costo (k€)"
        y-label="Conversioni"
        height="300px"
      />

      <DataChart
        type="scatter"
        title="Correlazione età / reddito"
        :labels="[]"
        :datasets="[
          {
            label: 'Gruppo A',
            data: [{ x: 22, y: 28 }, { x: 35, y: 45 }, { x: 41, y: 52 }, { x: 29, y: 33 }]
          },
          {
            label: 'Gruppo B',
            data: [{ x: 25, y: 60 }, { x: 38, y: 72 }, { x: 50, y: 85 }, { x: 44, y: 68 }]
          }
        ]"
        x-label="Età"
        y-label="Reddito (k€)"
        height="300px"
      />
    </Layout>

    <Modal v-model="isOpen" width="1000px" max-height="1000px">
      <DynamicForm
        :fields="formModalSchema"
        submitText="Send to home"
        @submit-form="handleSubmit"
      />

    </Modal>

    <button @click="isOpen = true">Open Modal</button>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Hero from "@/components/Hero.vue"
import Carousel from "@/components/Carousel.vue"
import DynamicForm from "@/components/DynamicForm.vue"
import ThemeChanger from "@/components/ThemeChanger.vue"
import Calendar from "@/components/Calendar.vue"
import Gantt from "@/components/Gantt.vue"
import DataTable from "@/components/DataTable.vue"
import Alert from "@/components/Alert.vue"
import Fab from "@/components/Fab.vue"
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import DataLoader from "@/components/DataLoader.vue"
import Layout from "@/components/Layout.vue"
import DataChart from "@/components/DataChart.vue"
import Modal from "@/components/Modal.vue"

export default {
  name: 'HomeView',

  components: {
    Navbar,
    Hero,
    Carousel,
    DynamicForm,
    ThemeChanger,
    Calendar,
    Gantt,
    DataTable,
    Alert,
    DataLoader,
    Fab,
    Layout,
    DataChart,
    Modal
  },

  data() {
    return {
      isOpen: false,
      links: ["Home", "Prodotti", "Chi Siamo", "Servizi", "Contatti", "FAQ"],
      columns:[
        { key: 'name',   label: 'Name',   sortable: true },
        { key: 'role',   label: 'Role',   sortable: true, badge: true,},
        { key: 'email',  label: 'Email',  sortable: true },
        { key: 'joined', label: 'Joined', sortable: true, format: (v) => new Date(v).toLocaleDateString()},
      ],
      rows:[
        { name: 'Mario Rossi 1', role: 'Admin', email: 'mario1@example.com', joined: '2023-01-15' },
        { name: 'Mario Rossi 2', role: 'User', email: 'mario2@example.com', joined: '2023-01-16' },
        { name: 'Mario Rossi 3', role: 'Editor', email: 'mario3@example.com', joined: '2023-01-17' },
        { name: 'Mario Rossi 4', role: 'Admin', email: 'mario4@example.com', joined: '2023-01-18' },
        { name: 'Mario Rossi 5', role: 'User', email: 'mario5@example.com', joined: '2023-01-19' },
        { name: 'Mario Rossi 6', role: 'Editor', email: 'mario6@example.com', joined: '2023-01-20' },
        { name: 'Mario Rossi 7', role: 'Admin', email: 'mario7@example.com', joined: '2023-01-21' },
        { name: 'Mario Rossi 8', role: 'User', email: 'mario8@example.com', joined: '2023-01-22' },
        { name: 'Mario Rossi 9', role: 'Editor', email: 'mario9@example.com', joined: '2023-01-23' },
        { name: 'Mario Rossi 10', role: 'Admin', email: 'mario10@example.com', joined: '2023-01-24' },
        { name: 'Mario Rossi 11', role: 'User', email: 'mario11@example.com', joined: '2023-01-25' },
        { name: 'Mario Rossi 12', role: 'Editor', email: 'mario12@example.com', joined: '2023-01-26' },
        { name: 'Mario Rossi 13', role: 'Admin', email: 'mario13@example.com', joined: '2023-01-27' },
        { name: 'Mario Rossi 14', role: 'User', email: 'mario14@example.com', joined: '2023-01-28' },
        { name: 'Mario Rossi 15', role: 'Editor', email: 'mario15@example.com', joined: '2023-01-29' },
        { name: 'Mario Rossi 16', role: 'Admin', email: 'mario16@example.com', joined: '2023-01-30' },
        { name: 'Mario Rossi 17', role: 'User', email: 'mario17@example.com', joined: '2023-01-31' },
        { name: 'Mario Rossi 18', role: 'Editor', email: 'mario18@example.com', joined: '2023-02-01' },
        { name: 'Mario Rossi 19', role: 'Admin', email: 'mario19@example.com', joined: '2023-02-02' },
        { name: 'Mario Rossi 20', role: 'User', email: 'mario20@example.com', joined: '2023-02-03' },
        { name: 'Mario Rossi 21', role: 'Editor', email: 'mario21@example.com', joined: '2023-02-04' },
        { name: 'Mario Rossi 22', role: 'Admin', email: 'mario22@example.com', joined: '2023-02-05' },
        { name: 'Mario Rossi 23', role: 'User', email: 'mario23@example.com', joined: '2023-02-06' },
        { name: 'Mario Rossi 24', role: 'Editor', email: 'mario24@example.com', joined: '2023-02-07' },
        { name: 'Mario Rossi 25', role: 'Admin', email: 'mario25@example.com', joined: '2023-02-08' },
        { name: 'Mario Rossi 26', role: 'User', email: 'mario26@example.com', joined: '2023-02-09' },
        { name: 'Mario Rossi 27', role: 'Editor', email: 'mario27@example.com', joined: '2023-02-10' },
        { name: 'Mario Rossi 28', role: 'Admin', email: 'mario28@example.com', joined: '2023-02-11' },
        { name: 'Mario Rossi 29', role: 'User', email: 'mario29@example.com', joined: '2023-02-12' },
        { name: 'Mario Rossi 30', role: 'Editor', email: 'mario30@example.com', joined: '2023-02-13' },
        { name: 'Mario Rossi 31', role: 'Admin', email: 'mario31@example.com', joined: '2023-02-14' },
        { name: 'Mario Rossi 32', role: 'User', email: 'mario32@example.com', joined: '2023-02-15' },
        { name: 'Mario Rossi 33', role: 'Editor', email: 'mario33@example.com', joined: '2023-02-16' },
        { name: 'Mario Rossi 34', role: 'Admin', email: 'mario34@example.com', joined: '2023-02-17' },
        { name: 'Mario Rossi 35', role: 'User', email: 'mario35@example.com', joined: '2023-02-18' },
        { name: 'Mario Rossi 36', role: 'Editor', email: 'mario36@example.com', joined: '2023-02-19' },
        { name: 'Mario Rossi 37', role: 'Admin', email: 'mario37@example.com', joined: '2023-02-20' },
        { name: 'Mario Rossi 38', role: 'User', email: 'mario38@example.com', joined: '2023-02-21' },
        { name: 'Mario Rossi 39', role: 'Editor', email: 'mario39@example.com', joined: '2023-02-22' },
        { name: 'Mario Rossi 40', role: 'Admin', email: 'mario40@example.com', joined: '2023-02-23' },
        { name: 'Mario Rossi 41', role: 'User', email: 'mario41@example.com', joined: '2023-02-24' },
        { name: 'Mario Rossi 42', role: 'Editor', email: 'mario42@example.com', joined: '2023-02-25' },
        { name: 'Mario Rossi 43', role: 'Admin', email: 'mario43@example.com', joined: '2023-02-26' },
        { name: 'Mario Rossi 44', role: 'User', email: 'mario44@example.com', joined: '2023-02-27' },
        { name: 'Mario Rossi 45', role: 'Editor', email: 'mario45@example.com', joined: '2023-02-28' },
        { name: 'Mario Rossi 46', role: 'Admin', email: 'mario46@example.com', joined: '2023-03-01' },
        { name: 'Mario Rossi 47', role: 'User', email: 'mario47@example.com', joined: '2023-03-02' },
        { name: 'Mario Rossi 48', role: 'Editor', email: 'mario48@example.com', joined: '2023-03-03' },
        { name: 'Mario Rossi 49', role: 'Admin', email: 'mario49@example.com', joined: '2023-03-04' },
        { name: 'Mario Rossi 50', role: 'User', email: 'mario50@example.com', joined: '2023-03-05' },
        { name: 'Mario Rossi 51', role: 'Editor', email: 'mario51@example.com', joined: '2023-03-06' },
        { name: 'Mario Rossi 52', role: 'Admin', email: 'mario52@example.com', joined: '2023-03-07' },
        { name: 'Mario Rossi 53', role: 'User', email: 'mario53@example.com', joined: '2023-03-08' },
        { name: 'Mario Rossi 54', role: 'Editor', email: 'mario54@example.com', joined: '2023-03-09' },
        { name: 'Mario Rossi 55', role: 'Admin', email: 'mario55@example.com', joined: '2023-03-10' },
        { name: 'Mario Rossi 56', role: 'User', email: 'mario56@example.com', joined: '2023-03-11' },
        { name: 'Mario Rossi 57', role: 'Editor', email: 'mario57@example.com', joined: '2023-03-12' },
        { name: 'Mario Rossi 58', role: 'Admin', email: 'mario58@example.com', joined: '2023-03-13' },
        { name: 'Mario Rossi 59', role: 'User', email: 'mario59@example.com', joined: '2023-03-14' },
        { name: 'Mario Rossi 60', role: 'Editor', email: 'mario60@example.com', joined: '2023-03-15' },
        { name: 'Mario Rossi 61', role: 'Admin', email: 'mario61@example.com', joined: '2023-03-16' },
        { name: 'Mario Rossi 62', role: 'User', email: 'mario62@example.com', joined: '2023-03-17' },
        { name: 'Mario Rossi 63', role: 'Editor', email: 'mario63@example.com', joined: '2023-03-18' },
        { name: 'Mario Rossi 64', role: 'Admin', email: 'mario64@example.com', joined: '2023-03-19' },
        { name: 'Mario Rossi 65', role: 'User', email: 'mario65@example.com', joined: '2023-03-20' },
        { name: 'Mario Rossi 66', role: 'Editor', email: 'mario66@example.com', joined: '2023-03-21' },
        { name: 'Mario Rossi 67', role: 'Admin', email: 'mario67@example.com', joined: '2023-03-22' },
        { name: 'Mario Rossi 68', role: 'User', email: 'mario68@example.com', joined: '2023-03-23' },
        { name: 'Mario Rossi 69', role: 'Editor', email: 'mario69@example.com', joined: '2023-03-24' },
        { name: 'Mario Rossi 70', role: 'Admin', email: 'mario70@example.com', joined: '2023-03-25' },
        { name: 'Mario Rossi 71', role: 'User', email: 'mario71@example.com', joined: '2023-03-26' },
        { name: 'Mario Rossi 72', role: 'Editor', email: 'mario72@example.com', joined: '2023-03-27' },
        { name: 'Mario Rossi 73', role: 'Admin', email: 'mario73@example.com', joined: '2023-03-28' },
        { name: 'Mario Rossi 74', role: 'User', email: 'mario74@example.com', joined: '2023-03-29' },
        { name: 'Mario Rossi 75', role: 'Editor', email: 'mario75@example.com', joined: '2023-03-30' },
        { name: 'Mario Rossi 76', role: 'Admin', email: 'mario76@example.com', joined: '2023-03-31' },
        { name: 'Mario Rossi 77', role: 'User', email: 'mario77@example.com', joined: '2023-04-01' },
        { name: 'Mario Rossi 78', role: 'Editor', email: 'mario78@example.com', joined: '2023-04-02' },
        { name: 'Mario Rossi 79', role: 'Admin', email: 'mario79@example.com', joined: '2023-04-03' },
        { name: 'Mario Rossi 80', role: 'User', email: 'mario80@example.com', joined: '2023-04-04' },
        { name: 'Mario Rossi 81', role: 'Editor', email: 'mario81@example.com', joined: '2023-04-05' },
        { name: 'Mario Rossi 82', role: 'Admin', email: 'mario82@example.com', joined: '2023-04-06' },
        { name: 'Mario Rossi 83', role: 'User', email: 'mario83@example.com', joined: '2023-04-07' },
        { name: 'Mario Rossi 84', role: 'Editor', email: 'mario84@example.com', joined: '2023-04-08' },
        { name: 'Mario Rossi 85', role: 'Admin', email: 'mario85@example.com', joined: '2023-04-09' },
        { name: 'Mario Rossi 86', role: 'User', email: 'mario86@example.com', joined: '2023-04-10' },
        { name: 'Mario Rossi 87', role: 'Editor', email: 'mario87@example.com', joined: '2023-04-11' },
        { name: 'Mario Rossi 88', role: 'Admin', email: 'mario88@example.com', joined: '2023-04-12' },
        { name: 'Mario Rossi 89', role: 'User', email: 'mario89@example.com', joined: '2023-04-13' },
        { name: 'Mario Rossi 90', role: 'Editor', email: 'mario90@example.com', joined: '2023-04-14' },
        { name: 'Mario Rossi 91', role: 'Admin', email: 'mario91@example.com', joined: '2023-04-15' },
        { name: 'Mario Rossi 92', role: 'User', email: 'mario92@example.com', joined: '2023-04-16' },
        { name: 'Mario Rossi 93', role: 'Editor', email: 'mario93@example.com', joined: '2023-04-17' },
        { name: 'Mario Rossi 94', role: 'Admin', email: 'mario94@example.com', joined: '2023-04-18' },
        { name: 'Mario Rossi 95', role: 'User', email: 'mario95@example.com', joined: '2023-04-19' },
        { name: 'Mario Rossi 96', role: 'Editor', email: 'mario96@example.com', joined: '2023-04-20' },
        { name: 'Mario Rossi 97', role: 'Admin', email: 'mario97@example.com', joined: '2023-04-21' },
        { name: 'Mario Rossi 98', role: 'User', email: 'mario98@example.com', joined: '2023-04-22' },
        { name: 'Mario Rossi 99', role: 'Editor', email: 'mario99@example.com', joined: '2023-04-23' },
        { name: 'Mario Rossi 100', role: 'Admin', email: 'mario100@example.com', joined: '2023-04-24' }
      ],
      myEvents:[
        { date: '2026-04-10', title: 'Riunione', time: '09:00', description: 'Stand-up team' },
        { date: '2026-04-10', title: 'Pranzo con cliente' },
        { date: '2026-04-10', title: 'Riunione', time: '09:00', description: 'Stand-up team' },
        { date: '2026-04-10', title: 'Pranzo con cliente' },
        { date: '2026-04-10', title: 'Riunione', time: '09:00', description: 'Stand-up team' },
      ],
      promoItems: [
        {
          title: "Sconto del 20% sulle T-Shirt",
          description: "Stampa le tue magliette personalizzate per l'estate. Usa il codice SUMMER20 al checkout.",
          tag: "Promo",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000",
          fullText: "Promozione valida fino al 31 Agosto. Applicabile su tutti i modelli di magliette in cotone organico."
        },
        {
          title: "Nuovi Biglietti da Visita Premium",
          description: "Fai colpo al primo sguardo con le nostre nuove finiture opache e lucide spessorate.",
          tag: "Novità",
          image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000",
          fullText: "Scegli tra carta patinata, goffrata o riciclata per trasmettere al meglio i valori del tuo brand."
        }
      ],

      productItems: [
        {
          title: "Stampe su Tela",
          description: "Trasforma le tue foto preferite in veri e propri quadri per arredare casa.",
          color: "#FFE5D9",
          tag: "Arredo"
        },
        {
          title: "Adesivi Fustellati",
          description: "Stickers resistenti all'acqua e al sole, tagliati esattamente seguendo la forma del tuo logo.",
          color: "#D8E2DC",
          tag: "Marketing"
        },
        {
          title: "Packaging Personalizzato",
          description: "Scatole, buste e nastro adesivo personalizzato per spedizioni che si fanno ricordare.",
          color: "#FCD5CE",
          tag: "Business"
        },
        {
          title: "Locandine e Volantini",
          description: "Stampa offset e digitale ad alta tiratura per promuovere i tuoi eventi.",
          color: "#E8E8E4",
          tag: "Eventi"
        }
      ],

      featureItems: [
        {
          title: "Assistenza Dedicata",
          description: "Ti seguiamo dalla scelta della carta fino al controllo file prima della stampa.",
          color: "#E0BBE4"
        },
        {
          title: "Stampa Eco-sostenibile",
          description: "Utilizziamo inchiostri a base d'acqua e carte certificate FSC.",
          color: "#957DAD"
        },
        {
          title: "Consegne Rapide",
          description: "Spedizioni in 24/48h in tutta Italia con corriere espresso tracciato.",
          color: "#D291BC"
        }
      ],
        formSchema: [
        {
          type: 'divider',
          name: 'divider_personali',
          label: 'Dati Personali',
        },
        {
          type: 'text',
          name: 'nome',
          label: 'Nome',
          placeholder: 'Mario',
          required: true,
          minLength: 2,
        },
        {
          type: 'text',
          name: 'cognome',
          label: 'Cognome',
          placeholder: 'Rossi',
          required: true,
          minLength: 2,
        },
        {
          type: 'email',
          name: 'email',
          label: 'Email',
          placeholder: 'mario.rossi@example.com',
          required: true,
          hint: 'Ti risponderemo qui',
        },
        {
          type: 'text',
          name: 'telefono',
          label: 'Telefono',
          placeholder: '+39 333 000 0000',
          required: false,
          pattern: '^[+\\d\\s\\-()]{6,20}$',
          patternMessage: 'Inserisci un numero di telefono valido',
        },
        {
          type: 'divider',
          name: 'divider_azienda',
          label: 'Informazioni Aziendali',
        },
        {
          type: 'text',
          name: 'azienda',
          label: 'Nome Azienda',
          placeholder: 'Acme S.r.l.',
          required: true,
          fullWidth: true,
        },
        {
          type: 'select',
          name: 'settore',
          label: 'Settore',
          required: true,
          placeholder: 'Seleziona il settore',
          options: [
            { label: ' Tecnologia & Software', value: 'tech' },
            { label: ' Edilizia & Costruzioni', value: 'edilizia' },
            { label: ' Commercio & Retail', value: 'retail' },
            { label: ' Sanità & Benessere', value: 'sanita' },
            { label: ' Formazione & Istruzione', value: 'formazione' },
            { label: ' Ristorazione & Turismo', value: 'turismo' },
            { label: ' Manifatturiero & Industria', value: 'industria' },
            { label: ' Finanza & Consulenza', value: 'finanza' },
            { label: ' Ambiente & Energia', value: 'ambiente' },
            { label: ' Creatività & Design', value: 'design' },
            { label: ' Logistica & Trasporti', value: 'logistica' },
            { label: ' Altro', value: 'altro' },
          ],
        },
        {
          type: 'number',
          name: 'dipendenti',
          label: 'Numero dipendenti',
          placeholder: 'es. 25',
          required: false,
          min: 1,
          max: 100000,
        },
        {
          type: 'date',
          name: 'data_inizio',
          label: 'Data di inizio desiderata',
          required: false,
          hint: 'Orientativa',
        },
        {
          type: 'divider',
          name: 'divider_progetto',
          label: 'Dettagli del Progetto',
        },
        {
          type: 'radio',
          name: 'tipo_servizio',
          label: 'Tipo di Servizio',
          required: true,
          fullWidth: true,
          options: [
            { label: 'Sviluppo Web', value: 'web', },
            { label: 'App Mobile', value: 'mobile', },
            { label: 'E-Commerce', value: 'ecommerce', },
            { label: 'Consulenza IT', value: 'consulenza', },
            { label: 'UI/UX Design', value: 'design', },
            { label: 'Manutenzione', value: 'manutenzione',},
          ],
        },
        {
          type: 'multiselect',
          name: 'tecnologie',
          label: 'Tecnologie preferite',
          required: false,
          placeholder: 'Seleziona una o più tecnologie',
          maxSelectedLabels: 4,
          fullWidth: true,
          options: [
            { label: 'Vue.js', value: 'vue' },
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
            { label: 'Node.js', value: 'node' },
            { label: 'Python / Django', value: 'python' },
            { label: 'Laravel / PHP', value: 'laravel' },
            { label: 'WordPress', value: 'wordpress' },
            { label: 'Shopify', value: 'shopify' },
            { label: 'React Native', value: 'reactnative' },
            { label: 'Flutter', value: 'flutter' },
          ],
        },
        {
          type: 'range',
          name: 'budget',
          label: 'Budget indicativo (€)',
          required: false,
          min: 500,
          max: 50000,
          step: 500,
          defaultValue: 5000,
          fullWidth: true,
          labels: ['€500', '€5.000', '€10.000', '€25.000', '€50.000+'],
        },
        {
          type: 'tags',
          name: 'keywords',
          label: 'Parole chiave del progetto',
          placeholder: 'Aggiungi keyword e premi Invio...',
          required: false,
          fullWidth: true,
          hint: 'Es: responsive, SEO, pagamenti online',
        },
        {
          type: 'textarea',
          name: 'descrizione',
          label: 'Descrizione del Progetto',
          placeholder: 'Descrivi il tuo progetto, gli obiettivi, le funzionalità principali e qualsiasi dettaglio utile...',
          required: true,
          rows: 5,
          maxLength: 1000,
          fullWidth: true,
        },
 
        {
          type: 'divider',
          name: 'divider_allegati',
          label: 'Allegati & Preferenze',
        },
        {
          type: 'file',
          name: 'documento',
          label: 'Allegato (brief, wireframe, documento...)',
          placeholder: 'Carica un file PDF, DOCX o immagine',
          required: false,
          accept: '.pdf,.doc,.docx,.png,.jpg,.zip',
          multiple: false,
          fullWidth: true,
        },
        {
          type: 'color',
          name: 'colore_brand',
          label: 'Colore primario del brand',
          required: false,
          defaultValue: '7c83fd',
        },
        {
          type: 'select',
          name: 'come_ci_hai_trovati',
          label: 'Come ci hai trovato?',
          fullWidth: true,
          required: false,
          placeholder: 'Seleziona',
          options: [
            { label: ' Google / Motori di ricerca', value: 'google' },
            { label: ' Social Media', value: 'social' },
            { label: ' Passaparola', value: 'passaparola' },
            { label: ' Articolo / Blog', value: 'blog' },
            { label: ' Email / Newsletter', value: 'email' },
            { label: ' Evento / Fiera', value: 'evento' },
          ],
        },
        {
          type: 'toggle',
          name: 'newsletter',
          label: 'Iscrivimi alla Newsletter',
          required: false,
          defaultValue: true,
        },
        {
          type: 'divider',
          name: 'divider_account',
          label: 'Crea il tuo Account',
        },
        {
          type: 'password',
          name: 'password',
          label: 'Password',
          placeholder: 'Almeno 8 caratteri',
          required: true,
          minLength: 8,
          hint: '',
        },
        {
          type: 'password',
          name: 'conferma_password',
          label: 'Conferma Password',
          placeholder: 'Ripeti la password',
          required: true,
          validate(value, formData) {
            if (value !== formData.password) return 'Le password non coincidono';
            return '';
          },
        },
        {
          type: 'divider',
          name: 'divider_consensi',
          label: 'Consensi',
        },
        {
          type: 'checkbox',
          name: 'privacy',
          label: 'Ho letto e accetto la Privacy Policy e i Termini di Servizio',
          required: true,
          fullWidth: true,
          errorMessage: 'Devi accettare la Privacy Policy per procedere',
        },
        {
          type: 'checkbox',
          name: 'marketing',
          label: 'Acconsento all\'utilizzo dei miei dati a fini di marketing',
          required: false,
          fullWidth: true,
        },
      ],
      formModalSchema:[],
      alertError:true,
      alertSuccess:true,
      alertInfo:true,
      alertWarning:true,
    };
  },
  methods:{
    gestisciInvio(dati) {
      console.log("Dati ricevuti dal form:", dati);
    },
    handleAdd(data){
      console.log("Dati ricevuti dal form calendar:",data);
    },
    onAction(){

    },
    onOpen(){

    },
    onClose(){

    },
    onCatalogLoaded(data) {
      console.log('Catalogo caricato:', data)
    },
    onCatalogError(err) {
      console.error('Errore catalogo:', err)
    },
    handleRowClick(rowData) {
      this.isOpen = true;

      this.formModalSchema = [{type:"divider",label:"Wanna fire someone today?",name:"ignore",},...Object.keys(rowData).map(key => ({
        type: "text",
        name: key,
        label: key.toUpperCase(),
        defaultValue: rowData[key],
        fullWidth:true,
      }))];

    },
    handleSubmit(formData){
      this.isOpen = false;
      console.log(formData);

    },
  }
};
</script>

<style scoped>
.page {
  position: relative;
  background-color: var(--background);
  min-height: 100vh;
}

.page__section {
  padding: 5rem 1rem;
}

.page__section--light {
  background-color: color-mix(in srgb, var(--foreground, #000) 3%, transparent);
}

.page__container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center ;
  flex-direction: column;

}

.page__section-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.5rem;
  color: var(--foreground);
}

.page__section-subtitle {
  text-align: center;
  color: color-mix(in srgb, var(--foreground) 60%, transparent);
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.calendar-section-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}

.layout-element{
  width: 100%;
  height: 100px;
  background-color: red;
}
</style>