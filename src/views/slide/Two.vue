<template>
    <div class="slide-two">
        <h1 class="mu-div">
            What is this???
        </h1>
        <div class="row">
            <div class="col-lg-3 mu-div pics">
                <div>
                    <img class="img-50" src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/04/1461122387heroku-logo.jpg">
                    <img class="img-50" src="https://techcrunch.com/wp-content/uploads/2019/01/IMG_20181016_092551.jpg?w=730&crop=1">
                </div>
                <div>
                    <img src="https://tutorialesenpdf.com/wp-content/uploads/2018/05/vuejs-tutorial-pdf.jpg">
                </div>
            </div>
            <div class="col-lg-9 mu-div">
                <div class="content">
                    <p>Das hier ist nicht nur meine Präsentation, sondern gleichzeitig eine Arbeitsprobe.</p>
                    <p>
                        Entwicklungsstart: Sonntag Abend<br>
                        Frontend-Engine: Vue Client <br>
                        SS Web-Framework: Express.js <br>
                        CSS-Framework: MustardUI <br>
                        Geschrieben in: Javascript EC6/2015<br>
                        Repository auf GitHub <br>
                        CI/CD und Runtime: Heruko <br> <br>

                        An sich MEVN Stack ohne MongoDB
                    </p>
                </div>
            </div>
        </div>
        <div class="row next-slide">
            <div class="col-lg-12 right mu-div">
                <a href="/slide/3">Weiter</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Two"
    }
</script>

<style scoped>
    .img-50{
        width:auto;
        height:190px;
    }
</style>