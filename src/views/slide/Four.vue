<template>
    <div class="slide-four">
        <h1 class="mu-div">
            Was ist denn YAM? Also Technisch?
        </h1>
        <div class="row">
            <div class="col-lg-4 mu-div">
                <img
                    src="http://www.socialbusinessevolution.de/sites/default/files/content_images/you_and_me.png"
                />
            </div>
            <div class="col-lg-8 mu-div">
                <div class="content">
                    <ul>
                        <li>
                            Das YouAndMe basiert auf Jive einer Software von
                            Aurea
                        </li>
                        <li>
                            Es ist ein monolithisches Java Spring System (maven)
                        </li>
                        <li>
                            Als Search ist T-Search eingebunden und zusätzlich CAS
                            (SSO) und CROWD(Auth)
                        </li>
                        <li>
                            Für die Entwicklung von Frontend Elementen steht ein
                            NodeJs SDK zur Verfügung
                        </li>
                        <li>
                            Als APIs steht einer Rest und eine JS-Web API zur
                            Verfügung
                        </li>
                        <li>
                            Ticketing über Jira, Versionsverwaltung über SVN
                        </li>
                        <li>
                            Für Entwickler werden meist PostgreSQL Datenbanken
                            genutzt.
                            <ol>
                                Die Produktivumgebungen nutzen Oracle
                            </ol>
                        </li>
                        <li>Buildprozess mit Jenkins</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row"></div>
        <div class="row next-slide">
            <div class="col-lg-12 right mu-div">
                <a href="/slide/5">Weiter</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Four'
};
</script>

<style scoped></style>
