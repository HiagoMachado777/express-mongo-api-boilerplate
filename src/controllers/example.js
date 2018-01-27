class ExampleController {
  constructor(Example) {
    this.Example = Example;
  }

  get(req, res) {
    return this.Example.find({})
      .then(examples => res.send(examples))
      .catch(error => res.status(500).send(error.message));
  }

  create(req, res) {
    const exampleToInsert = req.body.example;

    return this.Example(exampleToInsert).save()
      .then(examples => res.send(examples))
      .catch(error => res.status(500).send(error.message));
  }
}

export default ExampleController;
