## Resources - Endpoints

- User can edit/delete saved responses in the user's profile
- signup - Login
- strain recommender - Form to gather Data
- Save Recommendations
- User input === recommended strain ??

<!-- learn more about this -->

- User can save response from the DS API to the Web backend in the user's profile
- User can view saved responses and filter them in a useful way

<!-- Stretch -->

- link user to dispensary that has product that fulfills their needs

<!-- cool way to change pw and verify old pw  -->

```
router.put('/:id', (req, res) => {
  const { id } = req.params;
  if (Object.keys(req.body).length > 0) {
    function transform() {
      req.body.email = req.body.password;
      delete req.body.password;
      console.log(req.body, 'inside transf');
      return req.body;
    }
  } else {
    return res.status(404).json({ message: 'missing body' });
  }

  let user = transform();
  let newuser = schema.validate(user).value;
  if (Object.keys(user).length === 0 || schema.validate(user).error) {
    return res.status(500).json(schema.validate(user).error);
  } else {
    User.update(id, newuser)
      .then(update => res.status(200).json(update))
      .catch(err => res.status(500).json(err.message));
  }
});
```
