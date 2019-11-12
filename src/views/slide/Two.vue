<template>
    <div class="slide-two">
        <h1 class="mu-div">
            What is this???
        </h1>
        <div class="row">
            <div class="col-lg-3 mu-div pics">
                <div>
                    <img
                        src="https://miro.medium.com/max/914/1*Bwp5z9qlQAor4hw2K61gIw.jpeg"
                    />
                </div>
                <div>
                    <img
                        src="https://tutorialesenpdf.com/wp-content/uploads/2018/05/vuejs-tutorial-pdf.jpg"
                    />
                </div>
            </div>
            <div class="col-lg-9 mu-div">
                <div class="content">
                    <p>
                        Das hier ist nicht nur meine Präsentation, sondern
                        gleichzeitig eine Arbeitsprobe.
                    </p>
                    <p>
                        Entwicklungsstart: Sonntag Abend<br />
                        Frontend-Engine: Vue Client <br />
                        SS Web-Framework: Express.js <br />
                        CSS-Framework: MustardUI <br />
                        Geschrieben in: Javascript EC6/2015<br />
                        Repository auf GitHub <br />
                        CI/CD und Runtime: Heroku <br />
                        <br />

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
    name: 'Two'
};
</script>

<style scoped>
.img-50 {
    width: auto;
    height: 190px;
}
</style>
