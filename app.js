new Vue({
    el: '#app',
    
    data () {
      return {
          cursos: [],
          title: '',
          time: null,
      }
    },
    
    computed: {

        showCourses(){
            for(let i = 0; i >= this.cursos.lenght; i++) {
                return `Curso: ${this.cursos[i].title} - ${this.cursos[i].time} horas`
            }
        },

        totalTime() {
            let totalTime = 0;
            for (let i = 0; i < this.cursos.length; i++) {
                totalTime += parseInt(this.cursos[i].time);              
            }
            return totalTime;
        }
    },
    
    methods: {
        addCourse(){
            if(this.verifyInput()) {
                this.cursos.push({title: this.title, time: this.time})
                this.title = ''
                this.time = null   
            }         
        },

        verifyInput() {
            if(this.title == '') {
                this.$refs.inputTitle.focus()
                return false
            } else if (this.time == null) {
                this.$refs.inputTime.focus()
                return false
            }
            return true
        }

    }
  })