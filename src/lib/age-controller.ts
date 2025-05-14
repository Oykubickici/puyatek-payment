export const isAtLeast18 = (date: Date) => {
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    const hasHadBirthday =
      today.getMonth() > date.getMonth() ||
      (today.getMonth() === date.getMonth() && today.getDate() >= date.getDate());
    return age > 18 || (age === 18 && hasHadBirthday);
  };
  