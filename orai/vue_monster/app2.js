const app2 = Vue.createApp({
    data() {
        return {
            monsterHealth: 80,
            playerHealth: 90,
            winner: null,
            round: 0,
            logs: [],
        }
    },
    watch: {
        monsterHealth(value){
            if (value === 0)  {
                winner = 'You won!';
            }
            if (value === 0 && playerHealth === 0) {
                winner = 'Its a draw';
            }
        },
        playerHealth(value) {
            if (value === 0)  {
                winner = 'You lost!';
            }
        },
    },
    methods: {
        playerAttack() {
            this.round = ++this.round % 3;
            const attack = GetRandomNumber(5,12)
            this.monsterHealth = Math.Max(monsterHealth - attack, 0);
            logs.unshift(`Player attack - ${attack}`);
            this.monsterAttack();
        },
        monsterAttack() {
            const attack = GetRandomNumber(8,15);
            this.playerHealth = Math.Max(this.playerHealth - attack, 0);
            logs.unshift(`monster attack - ${attack}`);
        },
        specialAttack() {
            const attack = GetRandomNumber(10, 25);
            this.monsterHealth = Math.Max(this.monsterHealth - attack, 0);
            logs.unshift(`Player attack - ${attack}`);
            this.monsterAttack();
        },
        heal() {
            const heal = GetRandomNumber(8,20);
            this.playerAttack = Math.max(this.playerAttack + heal, 100);
            logs.unshift(`Player heal - ${heal}`);

            this.monsterAttack();
        },
        surrender() {
            winner = 'You lost!';
            this.logs.unshift(`Player surrender`);

        },
        newGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.winner = null;
            this.round = 0;
            this.logs = [];
        },
    }
});
app2.mount('#game');

function GetRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}