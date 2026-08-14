<template>
  <v-card color="transparent" flat>
    <v-layout>
      <v-navigation-drawer theme="dark" permanent class="glass-card">
        <v-list nav class="bg-transparent">
          <v-list-item prepend-icon="mdi-home" title="Dashboard" value="dashboard"/>

          <v-list-item prepend-icon="mdi-calendar" title="Calendar" value="calendar"/>

          <v-list-item prepend-icon="mdi-flag" title="Goals" value="goals"/>

          <v-list-item prepend-icon="mdi-book" title="Subjects" value="subjects"/>

          <v-list-item prepend-icon="mdi-" title="Progress" value="progress"/>

          <v-list-item prepend-icon="mdi-settings" title="Settings" value="settings"/>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 500px" />
    </v-layout>
  </v-card>
</template>
