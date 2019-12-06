export class myAngular{

    constructor(private firstname:string, public lastnmae:string){
        // this.lastnmae="sdhgvaghs";
        // this.firstname="gvgmhsdv"
    }

    display(){
        console.log(`
        -------------------------
        First name Is ${this.firstname}
        Last Name Is    ${this.lastnmae}
        ---------------------
        `)
    }

}
