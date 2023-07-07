<template>
  <v-app>
        <v-app-bar :elevation="10"
          color="teal-darken-3"
        >
          <v-btn size="large" icon="mdi-home-circle" href="http://localhost:5173"></v-btn>
          <v-tabs fixed-tabs>
            <v-tab to="/">Главная</v-tab>
            <v-tab to="/table">Таблица</v-tab>
          </v-tabs>
        </v-app-bar>
        <router-view></router-view>
    </v-app>
  </template>
