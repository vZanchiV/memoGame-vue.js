<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <h2>try to find pair of color</h2>
    <div class="content">
      <div class="case"  :class="item" v-for="(item, index) in items" v-on:click="Play(item)">{{ index }}  </div>
    </div>
    <div v-if="success"> Bravo, tu as gagné en {{ compt }} fois</div>
  </div>
</template>

<script>

function shuffle (tab) {
  for (let i = tab.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [tab[i - 1], tab[j]] = [tab[j], tab[i - 1]];
    }
    return window.classColor
}

window.classColor = ['red','yellow','blue','green','pink','purple','grey','black','red','yellow','blue','green','pink','purple','grey','black']
 

export default {
  name: 'memo',
  data () {
    return {
      msg: 'Welcome to game fun',
      oldItem : null,
      isboth:false,
      success:false,
      oldElem:null,
      items: shuffle(window.classColor),
      compt : 0,
      nbCaseOk : 0
    }
  },
  methods : {
    Play:function (item) {

      var  elem = event.target;
     
      // display the color of elem
      $(elem).addClass('focus');
      if(this.isboth === true) {
        if(this.oldItem === item ) {
          this.Matching();
        }
        else {
          this.NoMatching(elem,this.oldElem)
        }
        this.isboth = false
        this.oldItem = item
        this.compt += 1
      }
      else {
        this.isboth = true
        this.oldElem = event.target;
        this.oldItem = item
      }
    },

    Matching() {

      this.nbCaseOk += 1
      console.log(this.items.length,'---',this.nbCaseOk )
      if (this.nbCaseOk === (this.items.length/2)){
        this.success = true
      }
      
    },

    NoMatching (elem,oldElem) {
      this.oldItem = null 
     setTimeout(function(){  
      $(oldElem).removeClass('focus')
      $(elem).removeClass('focus')
      }, 1000);
    }
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
  position: relative;
}

.case.red:after {
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:#f08080;
  opacity:0;
}

.case.black:after {
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:#000000;
  opacity:0;
}

.case.grey:after {
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:#cccccc;
  opacity:0;
}

.case.purple:after {
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:#8470ff;
  opacity:0;
}

.case.yellow:after {
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:#ffd700;
  opacity:0;
}

.case.pink:after {
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:#e14182;
  opacity:0;
}

.case.green:after {
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:#4ea248;
  opacity:0;
}

.case.blue:after {
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:#3764ef;
  opacity:0;
}

.case.focus:after{
  opacity:1;
}

</style>
