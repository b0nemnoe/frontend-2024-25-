const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 80,
            playerHealth: 90,
            winner: null,
        }
    }, 
    watch: {
        monsterHealth(value) {
            if (value === 0 && this.playerHealth === 0) {
                this.winner = "It's draw";
            }
            if (value === 0) {
                this.winner = "You won!";
            }
        },
        playerHealth(value) {
            if (value === 0) {
                this.winner = "You lost!";
            }
        }
    },
    methods: {
        playerAttack() {
            this.round = ++this.round % 3;
            const attack = GetRandomNumber(5, 12);
            this.monsterHealth = Math.max(this.monsterHealth - attack, 0);
            this.logs.unshift(`Player attack - ${attack}`);
            this.monsterAttack();
        },
        monsterAttack() {
            const attack = GetRandomNumber(8, 15);
            this.playerHealth = Math.max(this.playerHealth - attack, 0);
            this.logs.unshift(`Monster attack - ${attack}`);

        },
        specialAttack() {
            const attack = GetRandomNumber(10, 25);
            this.monsterHealth = Math.max(this.monsterHealth - attack, 0);
            this.logs.unshift(`Player special attack - ${attack}`);
            this.monsterAttack();
        },
        heal() {
            const heal = GetRandomNumber(8, 20);
            this.playerHealth = Math.min(this.playerHealth + heal, 100);
            this.logs.unshift(`Player heal - ${heal}`);

            this.monsterAttack();
        },
        surrender() {
            this.winner = "Monster won!";
            this.logs.unshift(`Player surrender`);

        },
        newGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.winner = null;
            this.round = 0;
            this.logs = [];
        }
    },
});

app.mount('#game');

function GetRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}