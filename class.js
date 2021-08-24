class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD'
    constructor(name){
        this.name = name;
        this.address = this.address;
    }
    startSession(){
        console.log(this.name, 'start a support  session');

    }
}
const aamir = new Support('Amir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SRK Khan', 'Dubai');
const aksay = new Support('Aksay Kumar', 'Dubai');
aamir.startSession();
salman.startSession()
console.log(aamir, salman, sharuk, aksay);
console.log(salman);
