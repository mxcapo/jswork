var alfalfa = {
    tiredness: 20,
    hunger: 20,
    loneliness: 3,
    happiness: 15,
    obedientness: -5000,
    meanness: 999,
    feed: function(amount)
        {
            if (amount > 20)
            {
                console.log("om nom nom, eating", amount, "greenies");
                this.hunger = this.hunger - 5;
            }
            else
            {
                console.log("still hungry feed me more", amount, "greenies isn't nearly enough");
                this.meanness = this.meanness + 100;
                this.happiness = this.happiness - 30;
                this.hunger = this.hunger + 1;
            }
            this.status();
        },
    sleep: function()
        {
            console.log("Zzzzzzz");
            this.tiredness = this.tiredness - 10;
            this.hunger = this.hunger + 5;
            this.happiness = this.happiness + 20;
            this.status();
        },
    pet: function()
        {
            console.log("Rawrrrrhissssss i hate you");
            this.meanness = this.meanness * this.meanness;
            this.happiness = 0;
            this.obedientness = this.obedientness - 5000;
            this.loneliness = this.loneliness - 3;
            this.status();
        },
    status: function()
        {
            console.log("alfalfa is", this.tiredness, "tired");
            console.log("alfalfa is", this.hunger, "hungry");
            console.log("alfalfa is", this.loneliness, "lonely");
            console.log("alfalfa is", this.happiness, "happy");
            console.log("alfalfa is", this.obedientness, "obedient");
            console.log("alfalfa is", this.meanness, "mean");
        }
};

alfalfa.feed(14);
alfalfa.feed(80);
alfalfa.pet();