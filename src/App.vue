<template>
  <div class="container">
    <div v-if="getCnt <= getQuestLength">
      <button class="startBtn" v-if="!start" @click="toStart">Начать Тест</button>
      <test-item v-else></test-item>
    </div>
    <div v-else>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Вопрос</th>
            <th scope="col">Ваш ответ</th>
          </tr>
        </thead>
        <tr v-for="(item, index) in  getAnswers">
          <td>{{ item.title }}</td>
          <td>
           <tr v-for="answer in item.answer">
             {{answer}}
           </tr>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import testItem from './components/test.vue';

import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
  name: 'app',
  data () {
    return {
      start: false,
      finish: false
    }
  },
  components: {
    'test-item': testItem
  },
  computed: {
    ...mapGetters([
      'getCnt',
      'getQuestLength',
      'getAnswers'
    ])
  },
  methods: {
    ...mapActions([
        'ToCurrentQuest',
        'nowFinish'
    ]),
    toStart(){
      this.start = true;
      this.ToCurrentQuest();
    },
    toFinish(){
      if(this.cnt == this.qLength){
        console.log(1);
      }
    }
  },
}
</script>

<style scoped>
.container{
  text-align: center;
}
.startBtn{
  margin-top: 100px;
}
</style>
