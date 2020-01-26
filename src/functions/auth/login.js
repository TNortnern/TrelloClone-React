export const validation = content => {
  if (!content.email) {
      // use an email please
  }
  content.users.filter(
    user => user.email === content.email && user.password === content.password
  );
};
