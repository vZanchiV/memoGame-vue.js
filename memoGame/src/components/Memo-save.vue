<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <h2>try to find pair of color</h2>
    <div class="content">
      <div class="case"  :class="item" v-for="(item, index) in items" v-on:click="Toto()">{{ index }}  </div>
    </div>
  </div>
</template>

<script>

function distribColor () {
  return {
    
  }
}


window.classColor = ['red','yellow','blue','green','pink','purple','grey','black','red','yellow','blue','green','pink','purple','grey','black']
 

export default {
  name: 'memo',
  data () {
    return {
      msg: 'Welcome to game fun',
      counter:0,
      oldValue : '',
      // valueColor : window.classColor[Math.floor(Math.random()*window.classColor.length)]
      items: window.classColor
    }
  },
  methods : {
    Play:function (item) {

      debugger;

      if(oldValue === '') {
        oldValue = item
      }

      if(oldValue !== '' && oldValue === item) {
          console.log('match')
      }
      else {
          console.log('try again')
      }
      this.counter += 1
    }
  },
  Toto {
    debugger;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  display:flex;
  
}

li {
  display: inline-block;
  margin: 0 10px;
}
.content {
  display:flex;
  flex-wrap:wrap;
  width:1000px;
  margin:0 auto;

}

a {
  color: #42b983;
}
.case {
  width:248px;
  height:100px;
  border:1px solid #000;
  background-color:#fff;
  color:#000;
  font-size: 20px;
  line-height:100px;
  cursor:pointer;
  margin:0;

}
</style>
