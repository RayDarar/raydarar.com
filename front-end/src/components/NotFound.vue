<template>
  <section id="not-found">
    <p class="text">
      <span>404 Not Found</span>
      <button @click="$router.push('/')">Go to Homepage</button>
    </p>
  </section>
</template>

<style lang="scss" scoped>
#not-found {
  width: 100vw;
  height: 100vh;
}

.text {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;

  span {
    font-size: 2rem;
    margin: 1em;
  }

  button {
    padding: 1em;
    border-radius: 10px 10px 0 0;
    opacity: 0.8;
    transform: opacity 0.3s;
    cursor: pointer;

    &:hover, &:active {
      opacity: 1;
    }
  }
}
</style>
