<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  created(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, "velazquezblue@gmail.com", "edgar123").then((userCredential) => {
      const user = userCredential.user

      if(user == null){
        console.log("no autenticado")
      }else{
        console.log("autenticado correctamente", user)
      }
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  },
});
</script>