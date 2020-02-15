<template>
  <nav id="nav">
    <li class="link" @click="$emit('route-to', 'Home')">Home</li>
    <li class="link" @click="$emit('route-to', 'About Me')">About Me</li>
    <li class="link" @click="$emit('route-to', 'Timelapse')">Timelapse</li>
    <li class="link" @click="$emit('route-to', 'Projects')">Projects</li>
    <li class="link" @click="$emit('route-to', 'Contacts')">Contacts</li>
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
  cursor: pointer;
}

.link-active {
  opacity: 1;
  border-bottom: 1px solid white;
}

.link:hover {
  opacity: 1;
}
</style>
