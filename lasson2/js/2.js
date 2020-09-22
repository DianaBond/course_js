let employee = {
    company: "our company",
    title: "Ms.",
    name: "Ann"
};

function parameter(user){
    ((user.company === "our company" || user.company === "partner's company") && (user.title === "Mr." ||  user.title === "Ms.")) ? alert(user.name) : "not our employee";

}
parameter(employee);