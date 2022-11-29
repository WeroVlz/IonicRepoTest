<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ver usuarios en tiempo real</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <div>USUARIOS</div>
          </ion-col>
          <ion-col>
            <div>STATUS</div>
          </ion-col>
        </ion-row>
        <ion-row v-for="(item, index) in listaUsuarios" :key="index">
          <ion-col>
            <div>{{ listaKeys[index] }}</div>
          </ion-col>
          <ion-col>
            <div>{{ item.status }}</div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getDatabase, ref, onValue } from "firebase/database";
//import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
export default defineComponent({
  name: "Tab2Page",
  components: {
    IonHeader,
    IonGrid,
    IonRow,
    IonCol,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  data() {
    return {
      listaUsuarios: [{ status: "", clave: "" }],
      listaKeys: [],
    };
  },
  mounted() {
    const db = getDatabase();
    const starCountRef = ref(db, "usuarios/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      var cont = 0;
      snapshot.forEach((element) => {
        this.listaKeys[cont] = element.key;
        this.listaUsuarios[cont] = element.toJSON();
        cont++;
      });
    });
    console.log("lista de usuarios", this.listaCaves);
  },
});
</script>

<style>
ion-col > div {
  background-color: #f7f7f7;
  border: solid 1px #ddd;
  padding: 10px;
}
</style>