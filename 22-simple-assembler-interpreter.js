const programs = [
  ["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"],
  ["mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"],
  [],
  [
    "mov a 1",
    "mov b 1",
    "mov c 0",
    "mov d 26",
    "jnz c 2",
    "jnz 1 5",
    "mov c 7",
    "inc d",
    "dec c",
    "jnz c -2",
    "mov c a",
    "inc a",
    "dec b",
    "jnz b -2",
    "mov b c",
    "dec d",
    "jnz d -6",
    "mov c 18",
    "mov d 11",
    "inc a",
    "dec d",
    "jnz d -2",
    "dec c",
    "jnz c -5",
  ],
  [
    "mov c 12",
    "mov b 0",
    "mov a 200",
    "dec a",
    "inc b",
    "jnz a -2",
    "dec c",
    "mov a b",
    "jnz c -5",
    "jnz 0 1",
    "mov c a",
  ],
];

const simple_assembler = (program) => {
  const memory = {};
  let pc = 0;

  const mov = (reg, b) => {
    memory[reg] = typeof b == "number" ? b : memory[b];
    pc++;
  };

  const inc = (reg) => {
    memory[reg]++;
    pc++;
  };

  const dec = (reg) => {
    memory[reg]--;
    pc++;
  };

  const jnz = (reg, b) => {
    if (typeof reg == "number" && reg)
      pc = typeof b == "number" ? pc + b : pc + memory[b];
    else if (memory[reg]) pc = typeof b == "number" ? pc + b : pc + memory[b];
    else pc++;
  };

  const instructionSet = {
    mov: mov,
    inc: inc,
    dec: dec,
    jnz: jnz,
  };

  const decode = (line) => {
    return line
      .split(" ")
      .map((val) => (Number(val) || Number(val) === 0 ? Number(val) : val));
  };

  const execute = (command) =>
    command.length == 2
      ? instructionSet[command[0]](command[1])
      : instructionSet[command[0]](command[1], command[2]);

  while (pc < program.length) execute(decode(program[pc]));
  return memory;
};

programs.forEach((program) => console.log(simple_assembler(program)));