import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
	state: {
		quests: [
      {
        type: 'radio',
        title: 'Какой тег задает ссылку?',
        answers: [
          'a',
          'div',
          'span',
          'img'
        ]
      },
      {
        type: 'checkbox',
        title: 'Какой тег отображает картинку?',
        answers: [
          'a',
          'div',
          'span',
          'img'
        ]
      },
      {
        type: 'checkbox',
        title: 'Какой тег блочный?',
        answers: [
          'a',
          'div',
          'span',
          'img'
        ]
      },
      {
        type: 'checkbox',
        title: 'Какие из этих тегов строчные?',
        answers: [
          'a',
          'div',
          'span',
          'img'
        ]
      }
    ],
    userAnswers: [],
    cnt: 0,
    currentQuest: [],
    finish: false
	},
	getters: {
		getQuest(state){
			return state.quests;
		},
		getCnt(state){
			return state.cnt;
		},
		getAnswers(state){
			return state.userAnswers;
		},
		getCurrentQuest(state){
			return state.currentQuest;
		},
		getQuestLength(state){
			return state.quests.length;
		}
	},
	mutations: {
		UpCnt(state){
			state.cnt++;
		},
		ToCurrentQuest(state){
			state.currentQuest.splice(0);
			state.currentQuest.push(state.quests[state.cnt]);
			state.cnt++;
		},
		addToAnswers(state, obj){
			state.userAnswers.push(obj);
		},
		nowFinish(state){
			state.finish = true;
		}
	},
	actions: {
		UpCnt(state){
			store.commit('UpCnt');
		},
		ToCurrentQuest(state){
			store.commit('ToCurrentQuest');
		},
		addToAnswers(state, obj){
			store.commit('addToAnswers', obj);
		},
		nowFinish(state){
			store.commit('nowFinish');
		}
	},
	strict: process.env.NODE_ENV !== 'production'
});