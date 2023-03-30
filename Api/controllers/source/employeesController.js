const Employees = require('../../models/employees.js');

const handleNewEmployee = async (req, res) => {
    const { fname, lname, email, phone, address, city, zip, country, departement, job, salary, start, termination, etat, manager, matricule } = req.body;

    if(!fname || !lname || !email || !phone || !address || !city || !zip || !country || !departement || !job || !salary || !start || !termination || !etat || !manager || !matricule) return res.status(400).json({ 'message': 'All Champs are required.' });

    const duplicate = await Employees.count(
        { $or: [
            { email: email },
            { phone: phone },
            { matricule: matricule }
        ] 
        }
    )

    if (duplicate > 0) return res.status(201).json({ 'message': 'duplicate' });

    const newEmployee = new Employees({
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        address: address,
        city: city,
        zip: zip,
        country: country,
        departement: departement,
        job: job,
        salary: salary,
        start: start,
        termination: termination,
        etat: etat,
        manager: manager,
        matricule: matricule,
    });

    newEmployee.save()
        .then(() => res.status(201).json({ 'message': 'succes' }))
        .catch(err => res.status(500).json({ 'message': 'error'}));

};

module.exports = { handleNewEmployee };