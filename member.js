function skillsMember() {
    const member = {
        name: 'John Doe',
        age: 30,
        skills: ['JS', 'HTML', 'CSS'],
        display: function() {
            console.log(this.name + ' has ' + this.skills.length + ' skills');
        }
    };

    member.display();
}