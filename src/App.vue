<template>
  <v-app>

    <v-card  width="100%">
      <v-app-bar color="deep-purple" dark >

        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Художественный конкурс</v-toolbar-title>

      </v-app-bar>
    </v-card>


    <v-navigation-drawer v-model="drawer" absolute temporary>

      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="item in menuItems" :key="item" @click="itemOnClick">
            <router-link 
              :to='item.routerLink'>
              <v-list-item-icon>
                <v-icon>{{item.mdi}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="main">
        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  methods: {
    itemOnClick() {
      this.drawer = false;
    }
  },

  data: () => ({
      drawer: false,
      group: null,
      menuItems: [
        {
          title: 'Просмотр работ',
          mdi: 'mdi-view-dashboard-outline',
          routerLink: '/view'
        },
        {
          title: 'Загрузка работ',
          mdi: 'mdi-cloud-upload',
          routerLink: '/upload'
        }
      ],
    }),
});
</script>

