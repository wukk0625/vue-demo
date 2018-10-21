<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "AAAAAAAAAAAAA"
    };
  },
  methods: {
    say() {
      alert("hello");
    }
  },
  created() {
    this.say();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  color: skyblue;
  font: 3em sans-serif;
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
