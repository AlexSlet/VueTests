<template>
  <div class="wrapper">
    <div class="test" :key="index" v-for="(quest, index) in getCurrentQuest">
      <h3>{{ quest.title }}</h3>
      <div class="inputs-box">
        <label v-for="(answer, index) in quest.answers">
          <input type="checkbox" :id="index" :name="index" v-model="check" :value="answer">
          {{answer}}
        </label>
      </div>
      <button @click="sendAnswer(quest.title)" :disabled="disableBtn()">Ответить</button>
    </div>
  </div> 
</template>

<script>
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';

export default {
  data(){
    return {
      check: []
    }
  },
  computed: {
    ...mapGetters([
        'getQuest',
        'getCurrentQuest'
    ])
  },
  methods: {
    ...mapActions([
        'ToCurrentQuest',
        'addToAnswers'
    ]),
    sendAnswer(title){
      this.ToCurrentQuest();
      this.addToAnswers({
        title: title,
        answer: this.check
      });
      this.check = [];
    },
    disableBtn(){
      return this.check.length == 0;
    }
  },
}

</script>

<style scoped>
  .inputs-box{
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
  }
  .wrapper{
    text-align: left;
  }
</style>