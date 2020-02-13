<template>
  <nav id="nav">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/about">About Me</router-link>
    <router-link class="link" to="/timelapse">Timelapse</router-link>
    <router-link class="link" to="/projects">Projects</router-link>
    <router-link class="link" to="/contacts">Contacts</router-link>
  </nav>
</template>

<style lang="scss" scoped>
#nav {
  background-color: rgba(62, 70, 82, 0.7);
  border-radius: 34px;
  margin: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.link {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  opacity: 0.8;
  transition: 0.3s;
}

.router-link-active {
  opacity: 1;
  border-bottom: 1px solid white;
}

.link:hover {
  opacity: 1;
}

</style>
