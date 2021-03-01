export function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }




  test(() => {

    const result = capitalise('pikachu')
    expect(result).toBe('Pikachu')

  })