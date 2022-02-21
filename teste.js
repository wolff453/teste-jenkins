function foo(a) {  // Noncompliant
    let b = 12;
    if (a) {
      return b;
    }
    return b;
  }

  const obj = {
      password:'1234'
  } 