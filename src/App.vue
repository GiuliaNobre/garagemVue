import router from './router';
<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link to="/acessorios">Acessorios</router-link> |
    <router-link to="/categorias">Categorias</router-link> |
    <router-link to="/cores">Cor</router-link> |
    <router-link to="/marcas">Marca</router-link> 
  </header>
  <main>
    <RouterView />
  </main>
</template>