<template>
    <v-app>
        <canvas id="c" ref="c"></canvas>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        components: {
        },
        mounted(){
            //Source Credit: https://codepen.io/towc/pen/mJzOWJ
            const c = this.$refs["c"];
            let w = c.width = window.innerWidth,
                h = c.height = window.innerHeight,
                ctx = c.getContext('2d'),

                opts = {
                    len: 20,
                    count: 5000,
                    baseTime: 3,
                    addedTime: 10,
                    dieChance: .0005,
                    spawnChance: 1,
                    sparkChance: .1,
                    sparkDist: 1,
                    sparkSize: 1,

                    color: 'hsl(329,100%,light%)',
                    baseLight: 50,
                    addedLight: 10, // [50-10,50+10]
                    shadowToTimePropMult: 6,
                    baseLightInputMultiplier: .01,
                    addedLightInputMultiplier: .02,

                    cx: w / 2,
                    cy: h / 2,
                    repaintAlpha: .04,
                    hueChange: .1
                    /*
                    len: 20,
                    count: 100,
                    //Geschwindigkeit
                    baseTime: 10,
                    //Geschwindigkeits verlangsamung im Node
                    addedTime: 2,
                    //Name says it
                    dieChance: .005,
                    spawnChance: 1,
                    //Sparks um Node herum
                    sparkChance: 0.01,
                    //Enternung Sparks vom Node
                    sparkDist: 1000,
                    //Pixel per Spark x*x
                    sparkSize: 2,

                    //HSL COLOR
                    color: 'hsl(329,100%,light%)',
                    //Helligkeit (0-100)
                    baseLight: 50,
                    //Does cool shit
                    addedLight: 10, // [50-10,50+10]
                    shadowToTimePropMult: 6,
                    baseLightInputMultiplier: .01,
                    addedLightInputMultiplier: .02,

                    //Start Position x/y
                    cx: w / 2,
                    cy: h / 2,
                    //Zurückbeleibendes Abgeschwächtes
                    repaintAlpha: .01,
                    //Farbveränderung
                    hueChange: 0*/
                },

                tick = 0,
                lines = [],
                dieX = w / 2 / opts.len,
                dieY = h / 2 / opts.len,

                baseRad = Math.PI * 2 / 6;

            ctx.fillStyle = 'black';
            ctx.fillRect( 0, 0, w, h );

            function loop() {

                window.requestAnimationFrame( loop );

                ++tick;

                ctx.globalCompositeOperation = 'source-over';
                ctx.shadowBlur = 0;
                ctx.fillStyle = 'rgba(14, 14, 14,alp)'.replace( 'alp', opts.repaintAlpha );
                ctx.fillRect( 0, 0, w, h );
                ctx.globalCompositeOperation = 'lighter';

                if( lines.length < opts.count && Math.random() < opts.spawnChance )
                    lines.push( new Line );

                lines.map( function( line ){ line.step(); } );
            }
            function Line(){

                this.reset();
            }
            Line.prototype.reset = function(){

                this.x = 0;
                this.y = 0;
                this.addedX = 0;
                this.addedY = 0;

                this.rad = 0;

                this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();

                this.color = opts.color.replace( 'hue', tick * opts.hueChange );
                this.cumulativeTime = 0;

                this.beginPhase();
            };
            Line.prototype.beginPhase = function(){

                this.x += this.addedX;
                this.y += this.addedY;

                this.time = 0;
                this.targetTime = ( opts.baseTime + opts.addedTime * Math.random() ) |0;

                this.rad += baseRad * ( Math.random() < .5 ? 1 : -1 );
                this.addedX = Math.cos( this.rad );
                this.addedY = Math.sin( this.rad );

                if( Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY )
                    this.reset();
            };
            Line.prototype.step = function(){

                ++this.time;
                ++this.cumulativeTime;

                if( this.time >= this.targetTime )
                    this.beginPhase();

                const prop = this.time / this.targetTime,
                    wave = Math.sin(prop * Math.PI / 2),
                    x = this.addedX * wave,
                    y = this.addedY * wave;

                ctx.shadowBlur = prop * opts.shadowToTimePropMult;
                ctx.fillStyle = ctx.shadowColor = this.color.replace( 'light', opts.baseLight + opts.addedLight * Math.sin( this.cumulativeTime * this.lightInputMultiplier ) );
                ctx.fillRect( opts.cx + ( this.x + x ) * opts.len, opts.cy + ( this.y + y ) * opts.len, 2, 2 );

                if( Math.random() < opts.sparkChance )
                    ctx.fillRect( opts.cx + ( this.x + x ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.cy + ( this.y + y ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize )
            };
            loop();

            window.addEventListener( 'resize', function(){

                w = c.width = window.innerWidth;
                h = c.height = window.innerHeight;
                ctx.fillStyle = 'black';
                ctx.fillRect( 0, 0, w, h );

                opts.cx = w / 2;
                opts.cy = h / 2;

                dieX = w / 2 / opts.len;
                dieY = h / 2 / opts.len;
            });
        }
    };
</script>

<style>
    @import "./assets/mustard-ui.min.css";
    @import "./assets/style.css";
</style>
