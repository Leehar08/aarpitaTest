document.addEventListener('DOMContentLoaded', function() {

    // --- YOUR JSON DATA FOR EACH SUBJECT GOES HERE ---
    // Please replace these small samples with your full question sets.
    const physicsQuestions = [
    
        {
            "question": "Why is gold used in the Gold-leaf electroscope?",
            "options": {
                "a": "Gold is easily available in nature",
                "b": "Gold is malleable",
                "c": "Gold is conducting in nature",
                "d": "Gold is cheap"
            },
            "answer": "b"
        },
        {
            "question": "Two point charges repel each other with a force of \(F \). If the distance between the charges is doubled, the force between them will be:",
            "options": {
                "a": "(F/2)",
                "b": "(F/4)",
                "c": "(2F)",
                "d": "(4F)"
            },
            "answer": "(b) (F/4)"
        },
        {
            "question": "If a unit positive charge is taken from one point to another over an equipotential surface, then:",
            "options": {
                "a": "Work is done on the charge",
                "b": "Work is done by the charge",
                "c": "Work done is constant",
                "d": "No work is done"
            },
            "answer": "(d) No work is done"
        },
        {
            "question": "The electric field intensity due to a charged spherical shell of radius \\(R \\) at a distance $1(r1)$ from its center is zero when:",
            "options": {
                "a": "$1(r<R~l)$",
                "b": "\\(r = R \\)",
                "c": "\\ $1(r>R~l)$",
                "d": "None of the above"
            },
            "answer": "(a) $(r<R)$"
        },
        {
            "question": "The Sl unit of electric flux is:",
            "options": {
                "a": "Nm\\(^2\\)/C",
                "b": "Nm/C",
                "c": "C/Nm",
                "d": "$Cl(^{\\wedge}21)/Nml(^{\\wedge}21)$"
            },
            "answer": "(a) $Nml(^{\\wedge}21)/C$"
        },
        {
            "question": "According to Gauss's law, the net electric flux through any closed surface is equal to:",
            "options": {
                "a": "Product of net charge and permittivity",
                "b": "Net charge enclosed by the surface divided by permittivity",
                "c": "Product of net charge and electric field",
                "d": "Net charge enclosed by the surface"
            },
            "answer": "(b) Net charge enclosed by the surface divided by permittivity"
        },
        {
            "question": "Which of the following statements is correct about electric field lines?",
            "options": {
                "a": "They are closed loops.",
                "b": "They never intersect.",
                "c": "They diverge from negative charges.",
                "d": "They converge at positive charges."
            },
            "answer": "(b) They never intersect."
        },
        {
            "question": "A charged particle moves in an electric field. Which of the following quantities always remains constant?",
            "options": {
                "a": "Speed",
                "b": "Velocity",
                "c": "Momentum",
                "d": "Charge"
            },
            "answer": "(d) Charge"
        },
        {
            "question": "The electrostatic force between two charges is inversely proportional to the:",
            "options": {
                "a": "Distance between the charges",
                "b": "Square of the distance between the charges",
                "c": "Product of the charges",
                "d": "Square root of the distance between the charges"
            },
            "answer": "(b) Square of the distance between the charges"
        },
        {
            "question": "Physics involves the study of the",
            "options": {
                "1": "Plants",
                "2": "Humans",
                "3": "Birds and animals",
                "4": "Nature and natural phenomena"
            },
            "answer": "Physics is a branch of science which deals with the study of nature and natural phenomena."
        },
        {
            "question": "Which of the following is not a fundamental quantity?",
            "options": {
                "a": "Mass",
                "b": "Time",
                "c": "Density",
                "d": "Length"
            },
            "answer": "c) Density"
        },
        {
            "question": "For a projectile, the horizontal velocity:",
            "options": {
                "a": "Increases uniformly",
                "b": "Decreases uniformly",
                "c": "Remains constant",
                "d": "Is zero"
            },
            "answer": "c) Remains constant"
        },
        {
            "question": "The trajectory of a projectile is:",
            "options": {
                "a": "Circular",
                "b": "Elliptical",
                "c": "Parabolic",
                "d": "Straight line"
            },
            "answer": "c) Parabolic"
        },
        {
            "question": "Which of the following is an example of Newton's first law of motion?",
            "options": {
                "a": "A book remains at rest on a table until a force is applied.",
                "b": "A rocket accelerates upwards.",
                "c": "Action and reaction forces are equal and opposite.",
                "d": "Gravitational force acting on a free-falling object."
            },
            "answer": "a) A book remains at rest on a table until a force is applied."
        },
        {
            "question": "The unit of force is:",
            "options": {
                "a": "Joule",
                "b": "Newton",
                "c": "Watt",
                "d": "Pascal"
            },
            "answer": "b) Newton"
        },
        {
            "question": "Newton's second law gives the relationship between:",
            "options": {
                "a": "Velocity and time",
                "b": "Acceleration and force",
                "c": "Mass and weight",
                "d": "Displacement and force"
            },
            "answer": "b) Acceleration and force"
        },
        {
            "question": "When the net force on a body is zero, the body is said to be in:",
            "options": {
                "a": "Uniform motion",
                "b": "Accelerated motion",
                "c": "Rest or uniform motion",
                "d": "Rotational motion"
            },
            "answer": "c) Rest or uniform motion"
        },
        {
            "question": "Action and reaction forces act on:",
            "options": {
                "a": "The same body",
                "b": "Two different bodies",
                "c": "The center of mass",
                "d": "Two points of the same body"
            },
            "answer": "b) Two different bodies"
        },
        {
            "question": "The inertia of a body depends on its",
            "options": {
                "a": "Velocity",
                "b": "Mass",
                "c": "Acceleration",
                "d": "Shape"
            },
            "answer": "b) Mass"
        },
        {
            "question": "Frictional force acts in a direction",
            "options": {
                "a": "Perpendicular to the surface",
                "b": "Along the motion of the body",
                "c": "Opposite to the motion of the body",
                "d": "Parallel to the applied force"
            },
            "answer": "c) Opposite to the motion of the body"
        },
        {
            "question": "Which of these is not a type of friction?",
            "options": {
                "a": "Rolling friction",
                "b": "Static friction",
                "c": "Dynamic friction",
                "d": "Magnetic friction"
            },
            "answer": "d) Magnetic friction"
        },
        {
            "question": "A body is moving with uniform velocity. What is the net force acting on the body?",
            "options": {
                "a": "Zero",
                "b": "Equal to its weight",
                "c": "Equal to its acceleration",
                "d": "Constant and non-zero"
            },
            "answer": "a) Zero"
        },
        {
            "question": "The force required to overcome friction at the start of motion is called:",
            "options": {
                "a": "Static friction",
                "b": "Rolling friction",
                "c": "Kinetic friction",
                "d": "Limiting friction"
            },
            "answer": "d) Limiting friction"
        },
        {
            "question": "Which of the following is a contact force?",
            "options": {
                "a": "Gravitational force",
                "b": "Frictional force",
                "c": "Magnetic force",
                "d": "Electrostatic force"
            },
            "answer": "b) Frictional force"
        },
        {
            "question": "Newton's third law explains:",
            "options": {
                "a": "Conservation of energy",
                "b": "Conservation of momentum",
                "c": "Law of inertia",
                "d": "Rotational motion"
            },
            "answer": "b) Conservation of momentum"
        },
        {
            "question": "If the acceleration of a body is zero, which of the following is true?",
            "options": {
                "a": "No force is acting on the body.",
                "b": "Net force acting on the body is zero.",
                "c": "The body is in motion with increasing velocity.",
                "d": "The body is in motion with decreasing velocity."
            },
            "answer": "b) Net force acting on the body is zero."
        },
        {
            "question": "Which law of motion defines force?",
            "options": {
                "a": "Newton’s first law",
                "b": "Newton’s second law",
                "c": "Newton’s third law",
                "d": "None of the above"
            },
            "answer": "b) Newton’s second law"
        },
        {
            "question": "Work is defined as the product of:",
            "options": {
                "a": "Force and time",
                "b": "Force and displacement",
                "c": "Force and acceleration",
                "d": "Force and velocity"
            },
            "answer": "b) Force and displacement"
        },
        {
            "question": "The SI unit of work is:",
            "options": {
                "a": "Newton",
                "b": "Joule",
                "c": "Watt",
                "d": "Erg"
            },
            "answer": "b) Joule"
        },
        {
            "question": "If the angle between force and displacement is 90∘, the work done is:",
            "options": {
                "a": "Maximum",
                "b": "Zero",
                "c": "Negative",
                "d": "Minimum"
            },
            "answer": "b) Zero"
        },
        {
            "question": "Kinetic energy depends on:",
            "options": {
                "a": "Mass only",
                "b": "Velocity only",
                "c": "Both mass and velocity",
                "d": "None of the above"
            },
            "answer": "c) Both mass and velocity"
        },
        {
            "question": "What is the work done by a centripetal force on an object moving in a circular path?",
            "options": {
                "a": "Positive",
                "b": "Negative",
                "c": "Zero",
                "d": "Depends on the radius"
            },
            "answer": "c) Zero"
        },
        {
            "question": "The work-energy theorem states that:",
            "options": {
                "a": "Work done is equal to the change in potential energy",
                "b": "Work done is equal to the change in kinetic energy",
                "c": "Work done is equal to the change in total energy",
                "d": "None of the above"
            },
            "answer": "b) Work done is equal to the change in kinetic energy"
        },
        {
            "question": "Power is the rate of doing:",
            "options": {
                "a": "Work",
                "b": "Energy",
                "c": "Force",
                "d": "Momentum"
            },
            "answer": "a) Work"
        },
        {
            "question": "The SI unit of power is:",
            "options": {
                "a": "Watt",
                "b": "Joule",
                "c": "Newton",
                "d": "Erg"
            },
            "answer": "a) Watt"
        },
        {
            "question": "What happens to the kinetic energy if the velocity of a body doubles?",
            "options": {
                "a": "Remains the same",
                "b": "Doubles",
                "c": "Quadruples",
                "d": "Triples"
            },
            "answer": "c) Quadruples"
        },
        {
            "question": "The energy possessed by a body due to its motion is:",
            "options": {
                "a": "Potential energy",
                "b": "Kinetic energy",
                "c": "Elastic energy",
                "d": "None of the above"
            },
            "answer": "b) Kinetic energy"
        },
        {
            "question": "If the work done on an object is positive, then:",
            "options": {
                "a": "The object gains energy",
                "b": "The object loses energy",
                "c": "The energy remains constant",
                "d": "Work done is zero"
            },
            "answer": "a) The object gains energy"
        },
        {
            "question": "A body falls freely under gravity. Its total mechanical energy:",
            "options": {
                "a": "Increases",
                "b": "Decreases",
                "c": "Remains constant",
                "d": "Depends on the mass of the body"
            },
            "answer": "c) Remains constant"
        },
        {
            "question": "Which of the following is a scalar quantity?",
            "options": {
                "a": "Force",
                "b": "Power",
                "c": "Work",
                "d": "Both b and c"
            },
            "answer": "d) Both b and c"
        },
        {
            "question": "If the velocity of an object is halved, its kinetic energy becomes:",
            "options": {
                "a": "Half",
                "b": "Double",
                "c": "One-fourth",
                "d": "Unchanged"
            },
            "answer": "c) One-fourth"
        },
        {
            "question": "The center of mass of a system of particles lies:",
            "options": {
                "a": "Always inside the system",
                "b": "Always outside the system",
                "c": "May be inside or outside the system",
                "d": "Always on the heaviest particle"
            },
            "answer": "c) May be inside or outside the system"
        },
        {
            "question": "The center of mass of a uniform circular ring lies:",
            "options": {
                "a": "At the center of the ring",
                "b": "At the circumference of the ring",
                "c": "Outside the ring",
                "d": "At the midpoint of the radius"
            },
            "answer": "a) At the center of the ring"
        },
        {
            "question": "Moment of inertia depends on:",
            "options": {
                "a": "Mass of the body",
                "b": "Distribution of mass about the axis of rotation",
                "c": "Position and orientation of the axis of rotation",
                "d": "All of the above"
            },
            "answer": "d) All of the above"
        },
        {
            "question": "Torque is the rotational analogue of:",
            "options": {
                "a": "Force",
                "b": "Work",
                "c": "Momentum",
                "d": "Energy"
            },
            "answer": "a) Force"
        },
        {
            "question": "The SI unit of moment of inertia is:",
            "options": {
                "a": "kg m/s",
                "b": "kg m²",
                "c": "N m",
                "d": "N m²"
            },
            "answer": "b) kg m²"
        },
        {
            "question": "A rigid body is said to be in equilibrium if:",
            "options": {
                "a": "The net external force is zero",
                "b": "The net external torque is zero",
                "c": "Both (a) and (b)",
                "d": "None of these"
            },
            "answer": "c) Both (a) and (b)"
        },
        {
            "question": "The center of gravity of a freely suspended object lies:",
            "options": {
                "a": "At its geometric center",
                "b": "At the point of suspension",
                "c": "At the heaviest point of the object",
                "d": "None of the above"
            },
            "answer": "b) At the point of suspension"
        },
        {
            "question": "The rotational analogue of mass in linear motion is:",
            "options": {
                "a": "Force",
                "b": "Torque",
                "c": "Moment of inertia",
                "d": "Angular acceleration"
            },
            "answer": "c) Moment of inertia"
        },
        {
            "question": "For a rigid body rotating about a fixed axis, all particles have the same:",
            "options": {
                "a": "Angular velocity",
                "b": "Linear velocity",
                "c": "Linear acceleration",
                "d": "Kinetic energy"
            },
            "answer": "a) Angular velocity"
        },
        {
            "question": "In pure rolling motion, the velocity of the point of contact with the ground is:",
            "options": {
                "a": "Equal to the velocity of the center of mass",
                "b": "Zero",
                "c": "Double the velocity of the center of mass",
                "d": "Infinite"
            },
            "answer": "b) Zero"
        },
        {
            "question": "A rigid body is in rotational equilibrium if:",
            "options": {
                "a": "Net torque acting on the body is zero",
                "b": "Net force acting on the body is zero",
                "c": "Both (a) and (b)",
                "d": "None of these"
            },
            "answer": "a) Net torque acting on the body is zero"
        },
        {
            "question": "The angular acceleration of a rigid body is directly proportional to:",
            "options": {
                "a": "Torque",
                "b": "Moment of inertia",
                "c": "Radius of rotation",
                "d": "Angular velocity"
            },
            "answer": "a) Torque"
        },
        {
            "question": "Which of the following statements is true for a system of particles?",
            "options": {
                "a": "Linear momentum is always conserved.",
                "b": "Angular momentum is always conserved.",
                "c": "Both are conserved in the absence of external forces and torques.",
                "d": "Neither is conserved."
            },
            "answer": "c) Both are conserved in the absence of external forces and torques."
        },
        {
            "question": "Which law describes the orbits of planets around the sun?",
            "options": {
                "a": "Newton’s law",
                "b": "Faraday’s law",
                "c": "Kepler’s law",
                "d": "Kirchoff’s Law"
            },
            "answer": "(c) Kepler’s law"
        },
        {
            "question": "Gravitational force is:",
            "options": {
                "a": "Always attractive",
                "b": "Always repulsive",
                "c": "Attractive or repulsive depending on the situation",
                "d": "None of the above"
            },
            "answer": "a) Always attractive"
        },
        {
            "question": "Kepler’s first law states that:",
            "options": {
                "a": "The orbit of a planet is circular.",
                "b": "The orbit of a planet is elliptical with the Sun at one focus.",
                "c": "Planets move with uniform speed in their orbit.",
                "d": "The square of the orbital period is proportional to the cube of the semi-major axis."
            },
            "answer": "b) The orbit of a planet is elliptical with the Sun at one focus."
        },
        {
            "question": "If the radius of the Earth is halved, the acceleration due to gravity will become:",
            "options": {
                "a": "Half"
            },
            "answer": "C"
        },
        {
            "question": "Cathode rays were discovered by",
            "options": {
                "A": "Maxwell Clerk James",
                "B": "Heinrich Hertz",
                "C": "William Crookes",
                "D": "J.J. Thomson"
            },
            "answer": "C"
        },
        {
            "question": "Which of the following shows particle nature of light?",
            "options": {
                "A": "Photoelectric effect",
                "B": "Refraction",
                "C": "Interference",
                "D": "Polarisation"
            },
            "answer": "A"
        }
    

    ];

    const chemistryQuestions = [
  
    {
      "question": "Which branch of chemistry deals with the study of the composition, structure, and properties of matter?",
      "options": [
        "a) Physical Chemistry",
        "b) Organic Chemistry",
        "c) Analytical Chemistry",
        "d) General Chemistry"
      ],
      "answer": "d) General Chemistry"
    },
    {
      "question": "Which of the following is an extensive property of matter?",
      "options": [
        "a) Density",
        "b) Volume",
        "c) Melting point",
        "d) Refractive index"
      ],
      "answer": "b) Volume"
    },
    {
      "question": "Identify the intensive property:",
      "options": [
        "a) Mass",
        "b) Volume",
        "c) Boiling point",
        "d) Length"
      ],
      "answer": "c) Boiling point"
    },
    {
      "question": "Which law states that a given compound always contains exactly the same proportion of elements by weight?",
      "options": [
        "a) Law of Conservation of Mass",
        "b) Law of Constant Proportion",
        "c) Law of Multiple Proportion",
        "d) Avogadro’s Law"
      ],
      "answer": "b) Law of Constant Proportion"
    },
    {
      "question": "Who gave the law of conservation of mass?",
      "options": [
        "a) Dalton",
        "b) Lavoisier",
        "c) Proust",
        "d) Avogadro"
      ],
      "answer": "b) Lavoisier"
    },
    {
      "question": "The ratio of hydrogen to oxygen in water is always 1:8 by mass. This supports:",
      "options": [
        "a) Law of Constant Proportion",
        "b) Law of Multiple Proportion",
        "c) Avogadro’s Law",
        "d) Dalton’s Atomic Theory"
      ],
      "answer": "a) Law of Constant Proportion"
    },
    {
      "question": "What is the molecular mass of CO₂? (C = 12, O = 16)",
      "options": [
        "a) 28",
        "b) 44",
        "c) 32",
        "d) 40"
      ],
      "answer": "b) 44"
    },
    {
      "question": "What is the atomic mass of an element with 11 protons and 12 neutrons?",
      "options": [
        "a) 12",
        "b) 22",
        "c) 23",
        "d) 24"
      ],
      "answer": "c) 23"
    },
    {
      "question": "The number of moles in 90 g of water is (H = 1, O = 16):",
      "options": [
        "a) 2",
        "b) 5",
        "c) 10",
        "d) 1"
      ],
      "answer": "a) 5"
    },
    {
      "question": "1 mole of oxygen gas (O₂) weighs:",
      "options": [
        "a) 16 g",
        "b) 32 g",
        "c) 18 g",
        "d) 44 g"
      ],
      "answer": "b) 32 g"
    },
    {
      "question": "The empirical formula of benzene (C₆H₆) is:",
      "options": [
        "a) CH",
        "b) CH₂",
        "c) C₂H₂",
        "d) C₆H₆"
      ],
      "answer": "a) CH"
    },
    {
      "question": "If the empirical formula is CH₂ and the molecular mass is 56, what is the molecular formula?",
      "options": [
        "a) CH₂",
        "b) C₂H₄",
        "c) C₄H₈",
        "d) C₅H₁₀"
      ],
      "answer": "c) C₄H₈"
    },
    {
      "question": "Which of the following represents 1 mole?",
      "options": [
        "a) 12 g of carbon-12",
        "b) 6.022×10236.022 \\times 10^{23} atoms of helium",
        "c) 1 g of hydrogen gas",
        "d) 22.4 L of oxygen at STP"
      ],
      "answer": "a) 12 g of carbon-12"
    },
    {
      "question": "What volume does 1 mole of a gas occupy at STP?",
      "options": [
        "a) 22.4 mL",
        "b) 22.4 L",
        "c) 2.24 L",
        "d) 224 L"
      ],
      "answer": "b) 22.4 L"
    },
    {
      "question": "The reactant that gets completely consumed in a chemical reaction is called:",
      "options": [
        "a) Excess reagent",
        "b) Limiting reagent",
        "c) Primary reagent",
        "d) Catalytic reagent"
      ],
      "answer": "b) Limiting reagent"
    },
    {
      "question": "Molarity is defined as:",
      "options": [
        "a) Moles of solute per liter of solution",
        "b) Grams of solute per liter of solution",
        "c) Moles of solute per kilogram of solvent",
        "d) Grams of solute per kilogram of solvent"
      ],
      "answer": "a) Moles of solute per liter of solution"
    },
    {
      "question": "The number of moles of solute in 250 mL of 1 M NaCl solution is:",
      "options": [
        "a) 0.25",
        "b) 0.50",
        "c) 0.75",
        "d) 1.00"
      ],
      "answer": "a) 0.25"
    },
    {
      "question": "The number of significant figures in 0.00540 is:",
      "options": [
        "a) 2",
        "b) 3",
        "c) 4",
        "d) 5"
      ],
      "answer": "b) 3"
    },
    {
      "question": "In 3.00 × 10², the number of significant figures is:",
      "options": [
        "a) 1",
        "b) 2",
        "c) 3",
        "d) 4"
      ],
      "answer": "c) 3"
    },
    {
      "question": "Who discovered the electron?",
      "options": [
        "a) Rutherford",
        "b) J.J. Thomson",
        "c) Chadwick",
        "d) Bohr"
      ],
      "answer": "b) J.J. Thomson"
    },
    {
      "question": "What is the charge on an electron?",
      "options": [
        "a) +1",
        "b) 0",
        "c) -1",
        "d) +2"
      ],
      "answer": "c) -1"
    },
    {
      "question": "Who proposed the planetary model of the atom?",
      "options": [
        "a) Dalton",
        "b) Thomson",
        "c) Rutherford",
        "d) Bohr"
      ],
      "answer": "c) Rutherford"
    },
    {
      "question": "The mass of a neutron is approximately equal to the mass of a:",
      "options": [
        "a) Proton",
        "b) Electron",
        "c) Atom",
        "d) Molecule"
      ],
      "answer": "a) Proton"
    },
    {
      "question": "Which quantum number specifies the shape of an orbital?",
      "options": [
        "a) Principal quantum number",
        "b) Azimuthal quantum number",
        "c) Magnetic quantum number",
        "d) Spin quantum number"
      ],
      "answer": "b) Azimuthal quantum number"
    },
    {
      "question": "The principal quantum number 'n' determines:",
      "options": [
        "a) Shape of the orbital",
        "b) Orientation of the orbital",
        "c) Size and energy of the orbital",
        "d) Spin of the electron"
      ],
      "answer": "c) Size and energy of the orbital"
    },
    {
      "question": "For an electron in the 3p orbital, the value of ‘n’ is:",
      "options": [
        "a) 2",
        "b) 3",
        "c) 4",
        "d) 5"
      ],
      "answer": "b) 3"
    },
    {
      "question": "How many orbitals are present in the third shell (n = 3)?",
      "options": [
        "a) 3",
        "b) 9",
        "c) 18",
        "d) 27"
      ],
      "answer": "b) 9"
    },
    {
      "question": "According to Bohr’s model, electrons revolve around the nucleus in:",
      "options": [
        "a) Elliptical orbits",
        "b) Spiral orbits",
        "c) Circular orbits",
        "d) Undefined paths"
      ],
      "answer": "c) Circular orbits"
    },
    {
      "question": "The spectral lines in the hydrogen spectrum are caused by:",
      "options": [
        "a) Excitation of protons",
        "b) Movement of neutrons",
        "c) Electron transitions between energy levels",
        "d) Nucleus splitting"
      ],
      "answer": "c) Electron transitions between energy levels"
    },
    {
      "question": "The atomic number is equal to the number of:",
      "options": [
        "a) Neutrons",
        "b) Protons",
        "c) Electrons",
        "d) Both b and c"
      ],
      "answer": "d) Both b and c"
    },
    {
      "question": "Isotopes of an element differ in the number of:",
      "options": [
        "a) Protons",
        "b) Neutrons",
        "c) Electrons",
        "d) Orbitals"
      ],
      "answer": "b) Neutrons"
    },
    {
      "question": "Which subatomic particle has no charge?",
      "options": [
        "a) Electron",
        "b) Proton",
        "c) Neutron",
        "d) Positron"
      ],
      "answer": "c) Neutron"
    },
    {
      "question": "Who discovered the nucleus of an atom?",
      "options": [
        "a) J.J. Thomson",
        "b) Rutherford",
        "c) Bohr",
        "d) Chadwick"
      ],
      "answer": "b) Rutherford"
    },
    {
      "question": "The wavelength of light is inversely proportional to its:",
      "options": [
        "a) Frequency",
        "b) Velocity",
        "c) Amplitude",
        "d) Energy"
      ],
      "answer": "a) Frequency"
    },
    {
      "question": "According to Heisenberg’s uncertainty principle, it is impossible to determine simultaneously the:",
      "options": [
        "a) Energy and position of an electron",
        "b) Momentum and position of an electron",
        "c) Energy and velocity of an electron",
        "d) Velocity and charge of an electron"
      ],
      "answer": "b) Momentum and position of an electron"
    },
    {
      "question": "The maximum number of electrons that can be accommodated in a p-orbital is:",
      "options": [
        "a) 2",
        "b) 4",
        "c) 6",
        "d) 8"
      ],
      "answer": "c) 6"
    },
    {
      "question": "Aufbau principle states that:",
      "options": [
        "a) Electrons fill higher energy orbitals first",
        "b) Electrons fill orbitals in increasing order of energy",
        "c) Electrons pair up before filling orbitals",
        "d) Electrons fill d-orbitals before s-orbitals"
      ],
      "answer": "b) Electrons fill orbitals in increasing order of energy"
    },
    {
      "question": "Who is known as the father of the modern periodic table?",
      "options": [
        "a) Mendeleev",
        "b) Moseley",
        "c) Lavoisier",
        "d) Dobereiner"
      ],
      "answer": "b) Moseley"
    },
    {
      "question": "The modern periodic law is based on:",
      "options": [
        "a) Atomic mass",
        "b) Atomic number",
        "c) Valency",
        "d) Isotopes"
      ],
      "answer": "b) Atomic number"
    },
    {
      "question": "Which element has the highest electronegativity?",
      "options": [
        "a) Fluorine",
        "b) Oxygen",
        "c) Chlorine",
        "d) Nitrogen"
      ],
      "answer": "a) Fluorine"
    },
    {
      "question": "The elements in the same group of the periodic table have the same:",
      "options": [
        "a) Atomic radius",
        "b) Valence electrons",
        "c) Number of protons",
        "d) Ionization energy"
      ],
      "answer": "b) Valence electrons"
    },
    {
      "question": "What is the total number of groups in the periodic table?",
      "options": [
        "a) 7",
        "b) 8",
        "c) 18",
        "d) 32"
      ],
      "answer": "c) 18"
    },
    {
      "question": "Ionization energy increases across a period because:",
      "options": [
        "a) Nuclear charge decreases",
        "b) Shielding effect increases",
        "c) Atomic radius decreases",
        "d) Number of valence electrons decreases"
      ],
      "answer": "c) Atomic radius decreases"
    },
    {
      "question": "Which of the following has the largest atomic radius?",
      "options": [
        "a) Li",
        "b) Na",
        "c) K",
        "d) Rb"
      ],
      "answer": "d) Rb"
    },
    {
      "question": "The metallic character increases:",
      "options": [
        "a) Across a period",
        "b) Down a group",
        "c) From nonmetals to metals",
        "d) Both b and c"
      ],
      "answer": "d) Both b and c"
    },
    {
      "question": "Electronegativity decreases:",
      "options": [
        "a) Across a period",
        "b) Down a group",
        "c) Both a and b",
        "d) Neither a nor b"
      ],
      "answer": "b) Down a group"
    },
    {
      "question": "Which of the following ions is the smallest?",
      "options": [
        "a) Na⁺",
        "b) Mg²⁺",
        "c) Al³⁺",
        "d) Si⁴⁺"
      ],
      "answer": "d) Si⁴⁺"
    },
    {
      "question": "Which group contains the most reactive metals?",
      "options": [
        "a) Alkali metals",
        "b) Alkaline earth metals",
        "c) Halogens",
        "d) Noble gases"
      ],
      "answer": "a) Alkali metals"
    },
    {
      "question": "Which of the following is a noble gas?",
      "options": [
        "a) Oxygen",
        "b) Argon",
        "c) Nitrogen",
        "d) Hydrogen"
      ],
      "answer": "b) Argon"
    },
    {
      "question": "Transition elements are found in:",
      "options": [
        "a) s-block",
        "b) p-block",
        "c) d-block",
        "d) f-block"
      ],
      "answer": "c) d-block"
    },
    {
      "question": "Which element has a stable electronic configuration?",
      "options": [
        "a) Na",
        "b) Cl",
        "c) Ne",
        "d) O"
      ],
      "answer": "c) Ne"
    },
    {
      "question": "The reactivity of halogens decreases:",
      "options": [
        "a) Across a period",
        "b) Down a group",
        "c) From left to right",
        "d) None of the above"
      ],
      "answer": "b) Down a group"
    },
    {
      "question": "Which period in the periodic table contains the lanthanides?",
      "options": [
        "a) 4th period",
        "b) 5th period",
        "c) 6th period",
        "d) 7th period"
      ],
      "answer": "c) 6th period"
    },
    {
      "question": "Which block contains nonmetals, metals, and metalloids?",
      "options": [
        "a) s-block",
        "b) p-block",
        "c) d-block",
        "d) f-block"
      ],
      "answer": "b) p-block"
    },
    {
      "question": "Which of the following is a transition element?",
      "options": [
        "a) Na",
        "b) Fe",
        "c) He",
        "d) O"
      ],
      "answer": "b) Fe"
    },
    {
      "question": "Which group in the periodic table is also known as the \"coinage metals\"?",
      "options": [
        "a) Group 1",
        "b) Group 11",
        "c) Group 14",
        "d) Group 17"
      ],
      "answer": "b) Group 11"
    },
    {
      "question": "What is the most abundant element in the Earth's crust?",
      "options": [
        "a) Silicon",
        "b) Oxygen",
        "c) Aluminum",
        "d) Iron"
      ],
      "answer": "b) Oxygen"
    },
    {
      "question": "Which of the following has a tetrahedral structure?",
      "options": [
        "a) Methane (CH₄)",
        "b) Water (H₂O)",
        "c) Ammonia (NH₃)",
        "d) Carbon dioxide (CO₂)"
      ],
      "answer": "a) Methane (CH₄)"
    },
    {
      "question": "The bond angle in a water molecule is approximately:",
      "options": [
        "a) 120°",
        "b) 90°",
        "c) 104.5°",
        "d) 109.5°"
      ],
      "answer": "c) 104.5°"
    },
    {
      "question": "The type of bond in Cl₂ is:",
      "options": [
        "a) Ionic bond",
        "b) Covalent bond",
        "c) Hydrogen bond",
        "d) Metallic bond"
      ],
      "answer": "b) Covalent bond"
    },
    {
      "question": "Which of the following molecules is polar?",
      "options": [
        "a) CO₂",
        "b) BF₃",
        "c) H₂O",
        "d) CCl₄"
      ],
      "answer": "c) H₂O"
    },
    {
      "question": "Which hybridization is present in the BF₃ molecule?",
      "options": [
        "a) sp",
        "b) sp²",
        "c) sp³",
        "d) sp³d"
      ],
      "answer": "b) sp²"
    },
    {
      "question": "Which of the following has the strongest hydrogen bonding?",
      "options": [
        "a) H₂O",
        "b) NH₃",
        "c) HF",
        "d) CH₄"
      ],
      "answer": "c) HF"
    },
    {
      "question": "The molecule with a linear shape is:",
      "options": [
        "a) H₂O",
        "b) CO₂",
        "c) CH₄",
        "d) NH₃"
      ],
      "answer": "b) CO₂"
    },
    {
      "question": "What type of bond is formed in NaCl?",
      "options": [
        "a) Covalent",
        "b) Ionic",
        "c) Metallic",
        "d) Hydrogen"
      ],
      "answer": "b) Ionic"
    },
    {
      "question": "The formal charge on oxygen in the O₃ molecule is:",
      "options": [
        "a) -2",
        "b) -1",
        "c) 0",
        "d) +1"
      ],
      "answer": "c) 0"
    },
    {
      "question": "Which of the following has a dative (coordinate) bond?",
      "options": [
        "a) NH₄⁺",
        "b) H₂O",
        "c) CO₂",
        "d) F₂"
      ],
      "answer": "a) NH₄⁺"
    },
    {
      "question": "The shape of NH₃ according to VSEPR theory is:",
      "options": [
        "a) Linear",
        "b) Trigonal planar",
        "c) Trigonal pyramidal",
        "d) Tetrahedral"
      ],
      "answer": "c) Trigonal pyramidal"
    },
    {
      "question": "Which of the following molecules does not have a dipole moment?",
      "options": [
        "a) HCl",
        "b) H₂O",
        "c) CH₄",
        "d) NH₃"
      ],
      "answer": "c) CH₄"
    }

    ];

    const biologyQuestions = [
        
    {
      "question": "Which of the following is considered the basic unit of life?",
      "options": {
        "a": "Organ",
        "b": "Tissue",
        "c": "Cell",
        "d": "Molecule"
      },
      "answer": "c) Cell"
    },
    {
      "question": "Who coined the term \"cell\"?",
      "options": {
        "a": "Robert Hooke",
        "b": "Antonie van Leeuwenhoek",
        "c": "Matthias Schleiden",
        "d": "Theodor Schwann"
      },
      "answer": "a) Robert Hooke"
    },
    {
      "question": "Which of the following is NOT a characteristic of prokaryotic cells?",
      "options": {
        "a": "Absence of a true nucleus",
        "b": "Presence of membrane-bound organelles",
        "c": "Smaller in size compared to eukaryotic cells",
        "d": "Presence of a cell wall"
      },
      "answer": "b) Presence of membrane-bound organelles"
    },
    {
      "question": "The powerhouse of the cell is:",
      "options": {
        "a": "Nucleus",
        "b": "Mitochondria",
        "c": "Ribosome",
        "d": "Endoplasmic Reticulum"
      },
      "answer": "b) Mitochondria"
    },
    {
      "question": "The control center of the cell is:",
      "options": {
        "a": "Cytoplasm",
        "b": "Mitochondria",
        "c": "Nucleus",
        "d": "Cell membrane"
      },
      "answer": "c) Nucleus"
    },
    {
      "question": "Which organelle is responsible for protein synthesis?",
      "options": {
        "a": "Golgi apparatus",
        "b": "Lysosome",
        "c": "Ribosome",
        "d": "Vacuole"
      },
      "answer": "c) Ribosome"
    },
    {
      "question": "The cell wall in plant cells is primarily composed of:",
      "options": {
        "a": "Lignin",
        "b": "Chitin",
        "c": "Cellulose",
        "d": "Peptidoglycan"
      },
      "answer": "c) Cellulose"
    },
    {
      "question": "Which of the following is present in animal cells but absent in plant cells?",
      "options": {
        "a": "Cell wall",
        "b": "Chloroplast",
        "c": "Centrioles",
        "d": "Large central vacuole"
      },
      "answer": "c) Centrioles"
    },
    {
      "question": "The fluid mosaic model of the cell membrane was proposed by:",
      "options": {
        "a": "Robert Hooke",
        "b": "Singer and Nicolson",
        "c": "Watson and Crick",
        "d": "Schleiden and Schwann"
      },
      "answer": "b) Singer and Nicolson"
    },
    {
      "question": "Passive transport across the cell membrane involves:",
      "options": {
        "a": "ATP expenditure",
        "b": "Movement of substances from lower to higher concentration",
        "c": "Movement of substances down their concentration gradient",
        "d": "Carrier proteins only"
      },
      "answer": "c) Movement of substances down their concentration gradient"
    },
    {
      "question": "Osmosis is the movement of:",
      "options": {
        "a": "Solute molecules",
        "b": "Solvent molecules",
        "c": "Both solute and solvent molecules",
        "d": "Ions only"
      },
      "answer": "b) Solvent molecules"
    },
    {
      "question": "The phase of the cell cycle where DNA replication occurs is:",
      "options": {
        "a": "G₁ phase",
        "b": "S phase",
        "c": "G₂ phase",
        "d": "M phase"
      },
      "answer": "b) S phase"
    },
    {
      "question": "Mitosis results in the formation of:",
      "options": {
        "a": "Four haploid cells",
        "b": "Two diploid cells",
        "c": "Two haploid cells",
        "d": "Four diploid cells"
      },
      "answer": "b) Two diploid cells"
    },
    {
      "question": "Crossing over occurs during which phase of meiosis?",
      "options": {
        "a": "Prophase I",
        "b": "Metaphase I",
        "c": "Anaphase I",
        "d": "Telophase I"
      },
      "answer": "a) Prophase I"
    },
    {
      "question": "Which of the following is involved in the synthesis of lipids and steroids?",
      "options": {
        "a": "Rough Endoplasmic Reticulum",
        "b": "Smooth Endoplasmic Reticulum",
        "c": "Golgi apparatus",
        "d": "Ribosomes"
      },
      "answer": "b) Smooth Endoplasmic Reticulum"
    },
    {
      "question": "Lysosomes are known as:",
      "options": {
        "a": "Protein factories",
        "b": "Suicide bags",
        "c": "Powerhouses of the cell",
        "d": "Packaging centers"
      },
      "answer": "b) Suicide bags"
    },
    {
      "question": "Photosynthesis takes place in which organelle?",
      "options": {
        "a": "Mitochondria",
        "b": "Chloroplast",
        "c": "Nucleus",
        "d": "Ribosome"
      },
      "answer": "b) Chloroplast"
    },
    {
      "question": "The primary function of vacuoles in plant cells is:",
      "options": {
        "a": "Protein synthesis",
        "b": "Energy production",
        "c": "Storage and maintaining turgor pressure",
        "d": "Detoxification"
      },
      "answer": "c) Storage and maintaining turgor pressure"
    },
    {
      "question": "What is the primary role of the Golgi apparatus?",
      "options": {
        "a": "DNA replication",
        "b": "Protein synthesis",
        "c": "Modification, sorting, and packaging of proteins and lipids",
        "d": "Cellular respiration"
      },
      "answer": "c) Modification, sorting, and packaging of proteins and lipids"
    },
    {
      "question": "Which type of tissue forms the outer covering of an animal body and lines its internal organs?",
      "options": {
        "a": "Connective tissue",
        "b": "Muscular tissue",
        "c": "Epithelial tissue",
        "d": "Nervous tissue"
      },
      "answer": "c) Epithelial tissue"
    },
    {
      "question": "Blood is an example of which type of tissue?",
      "options": {
        "a": "Epithelial tissue",
        "b": "Connective tissue",
        "c": "Muscular tissue",
        "d": "Nervous tissue"
      },
      "answer": "b) Connective tissue"
    },
    {
      "question": "The tissue responsible for movement in animals is:",
      "options": {
        "a": "Epithelial tissue",
        "b": "Connective tissue",
        "c": "Muscular tissue",
        "d": "Nervous tissue"
      },
      "answer": "c) Muscular tissue"
    },
    {
      "question": "Which tissue coordinates and controls body activities?",
      "options": {
        "a": "Epithelial tissue",
        "b": "Connective tissue",
        "c": "Muscular tissue",
        "d": "Nervous tissue"
      },
      "answer": "d) Nervous tissue"
    },
    {
      "question": "Xylem is responsible for the transport of:",
      "options": {
        "a": "Food",
        "b": "Water and minerals",
        "c": "Sugars",
        "d": "Hormones"
      },
      "answer": "b) Water and minerals"
    },
    {
      "question": "Phloem is responsible for the transport of:",
      "options": {
        "a": "Water",
        "b": "Minerals",
        "c": "Food (sugars)",
        "d": "Oxygen"
      },
      "answer": "c) Food (sugars)"
    },
    {
      "question": "Which type of plant tissue is responsible for growth in length?",
      "options": {
        "a": "Apical meristem",
        "b": "Lateral meristem",
        "c": "Intercalary meristem",
        "d": "Parenchyma"
      },
      "answer": "a) Apical meristem"
    },
    {
      "question": "Sclerenchyma is a type of simple permanent tissue that provides:",
      "options": {
        "a": "Flexibility",
        "b": "Support and rigidity",
        "c": "Storage",
        "d": "Photosynthesis"
      },
      "answer": "b) Support and rigidity"
    },
    {
      "question": "The outermost protective layer of a plant is:",
      "options": {
        "a": "Cortex",
        "b": "Epidermis",
        "c": "Endodermis",
        "d": "Vascular bundle"
      },
      "answer": "b) Epidermis"
    },
    {
      "question": "Which of the following is a component of xylem?",
      "options": {
        "a": "Sieve tubes",
        "b": "Companion cells",
        "c": "Tracheids",
        "d": "Phloem parenchyma"
      },
      "answer": "c) Tracheids"
    },
    {
      "question": "Root hairs are extensions of which tissue?",
      "options": {
        "a": "Cortex",
        "b": "Endodermis",
        "c": "Epidermis",
        "d": "Vascular cambium"
      },
      "answer": "c) Epidermis"
    },
    {
      "question": "The main site of photosynthesis in plants is the:",
      "options": {
        "a": "Root",
        "b": "Stem",
        "c": "Leaf",
        "d": "Flower"
      },
      "answer": "c) Leaf"
    },
    {
      "question": "Stomata are responsible for:",
      "options": {
        "a": "Absorption of water",
        "b": "Transpiration and gaseous exchange",
        "c": "Food storage",
        "d": "Support"
      },
      "answer": "b) Transpiration and gaseous exchange"
    },
    {
      "question": "Which pigment is responsible for the green color of plants?",
      "options": {
        "a": "Carotenoid",
        "b": "Xanthophyll",
        "c": "Chlorophyll",
        "d": "Anthocyanin"
      },
      "answer": "c) Chlorophyll"
    },
    {
      "question": "The primary product of photosynthesis is:",
      "options": {
        "a": "Oxygen",
        "b": "Carbon dioxide",
        "c": "Glucose",
        "d": "Water"
      },
      "answer": "c) Glucose"
    },
    {
      "question": "Which part of the flower develops into a fruit?",
      "options": {
        "a": "Ovary",
        "b": "Ovule",
        "c": "Stamen",
        "d": "Petal"
      },
      "answer": "a) Ovary"
    },
    {
      "question": "Pollination is the transfer of pollen grains from:",
      "options": {
        "a": "Anther to stigma",
        "b": "Stigma to anther",
        "c": "Ovary to ovule",
        "d": "Petal to sepal"
      },
      "answer": "a) Anther to stigma"
    },
    {
      "question": "Which hormone is responsible for cell elongation in plants?",
      "options": {
        "a": "Gibberellin",
        "b": "Cytokinin",
        "c": "Auxin",
        "d": "Abscisic acid"
      },
      "answer": "c) Auxin"
    },
    {
      "question": "Respiration in plants primarily occurs in the:",
      "options": {
        "a": "Chloroplasts",
        "b": "Mitochondria",
        "c": "Vacuoles",
        "d": "Cell wall"
      },
      "answer": "b) Mitochondria"
    },
    {
      "question": "The process of loss of water in the form of vapor from the aerial parts of a plant is called:",
      "options": {
        "a": "Photosynthesis",
        "b": "Transpiration",
        "c": "Respiration",
        "d": "Absorption"
      },
      "answer": "b) Transpiration"
    },
    {
      "question": "Which of the following is an example of a taproot system?",
      "options": {
        "a": "Wheat",
        "b": "Maize",
        "c": "Carrot",
        "d": "Rice"
      },
      "answer": "c) Carrot"
    },
    {
      "question": "The male reproductive part of a flower is the:",
      "options": {
        "a": "Pistil",
        "b": "Stamen",
        "c": "Petal",
        "d": "Sepal"
      },
      "answer": "b) Stamen"
    },
    {
      "question": "Which of the following is a non-flowering plant?",
      "options": {
        "a": "Rose",
        "b": "Fern",
        "c": "Sunflower",
        "d": "Mango"
      },
      "answer": "b) Fern"
    },
    {
      "question": "The process of seed germination requires:",
      "options": {
        "a": "Light, water, and optimal temperature",
        "b": "Carbon dioxide, water, and light",
        "c": "Oxygen, water, and optimal temperature",
        "d": "Sugar, water, and light"
      },
      "answer": "c) Oxygen, water, and optimal temperature"
    },
    {
      "question": "Which part of the plant absorbs water and minerals from the soil?",
      "options": {
        "a": "Stem",
        "b": "Leaf",
        "c": "Root",
        "d": "Flower"
      },
      "answer": "c) Root"
    },
    {
      "question": "The major excretory product in humans is:",
      "options": {
        "a": "Ammonia",
        "b": "Uric acid",
        "c": "Urea",
        "d": "Creatinine"
      },
      "answer": "c) Urea"
    },
    {
      "question": "The functional unit of the kidney is the:",
      "options": {
        "a": "Nephron",
        "b": "Glomerulus",
        "c": "Renal artery",
        "d": "Ureter"
      },
      "answer": "a) Nephron"
    },
    {
      "question": "Which of the following is responsible for filtering blood in the kidney?",
      "options": {
        "a": "Loop of Henle",
        "b": "Collecting duct",
        "c": "Bowman's capsule",
        "d": "Renal tubule"
      },
      "answer": "c) Bowman's capsule"
    },
    {
      "question": "The process of maintaining a stable internal environment in the body is called:",
      "options": {
        "a": "Digestion",
        "b": "Respiration",
        "c": "Homeostasis",
        "d": "Excretion"
      },
      "answer": "c) Homeostasis"
    },
    {
      "question": "The primary function of red blood cells is:",
      "options": {
        "a": "Fighting infection",
        "b": "Clotting blood",
        "c": "Transporting oxygen",
        "d": "Producing antibodies"
      },
      "answer": "c) Transporting oxygen"
    },
    {
      "question": "Which type of blood vessel carries deoxygenated blood away from the heart?",
      "options": {
        "a": "Artery",
        "b": "Vein",
        "c": "Capillary",
        "d": "Pulmonary artery"
      },
      "answer": "d) Pulmonary artery"
    },
    {
      "question": "The universal donor blood group is:",
      "options": {
        "a": "A",
        "b": "B",
        "c": "AB",
        "d": "O"
      },
      "answer": "d) O"
    },
    {
      "question": "Which of the following is the largest artery in the human body?",
      "options": {
        "a": "Pulmonary artery",
        "b": "Aorta",
        "c": "Carotid artery",
        "d": "Femoral artery"
      },
      "answer": "b) Aorta"
    },
    {
      "question": "The pacemaker of the heart is the:",
      "options": {
        "a": "AV node",
        "b": "SA node",
        "c": "Bundle of His",
        "d": "Purkinje fibers"
      },
      "answer": "b) SA node"
    },
    {
      "question": "The process of digestion begins in the:",
      "options": {
        "a": "Stomach",
        "b": "Small intestine",
        "c": "Mouth",
        "d": "Esophagus"
      },
      "answer": "c) Mouth"
    },
    {
      "question": "Which enzyme is responsible for the digestion of starch in the mouth?",
      "options": {
        "a": "Pepsin",
        "b": "Amylase",
        "c": "Lipase",
        "d": "Trypsin"
      },
      "answer": "b) Amylase"
    },
    {
      "question": "Bile is produced by the:",
      "options": {
        "a": "Stomach",
        "b": "Pancreas",
        "c": "Liver",
        "d": "Gallbladder"
      },
      "answer": "c) Liver"
    },
    {
      "question": "The absorption of digested food primarily occurs in the:",
      "options": {
        "a": "Stomach",
        "b": "Large intestine",
        "c": "Small intestine",
        "d": "Esophagus"
      },
      "answer": "c) Small intestine"
    },
    {
      "question": "Which organ secretes insulin and glucagon?",
      "options": {
        "a": "Liver",
        "b": "Kidney",
        "c": "Pancreas",
        "d": "Thyroid gland"
      },
      "answer": "c) Pancreas"
    },
    {
      "question": "Which part of the brain controls breathing and heart rate?",
      "options": {
        "a": "Cerebrum",
        "b": "Cerebellum",
        "c": "Medulla oblongata",
        "d": "Hypothalamus"
      },
      "answer": "c) Medulla oblongata"
    },
    {
      "question": "The largest part of the human brain is the:",
      "options": {
        "a": "Cerebellum",
        "b": "Brainstem",
        "c": "Cerebrum",
        "d": "Thalamus"
      },
      "answer": "c) Cerebrum"
    },
    {
      "question": "Which sense organ is responsible for hearing?",
      "options": {
        "a": "Eye",
        "b": "Nose",
        "c": "Ear",
        "d": "Tongue"
      },
      "answer": "c) Ear"
    },
    {
      "question": "The outermost layer of the human skin is called the:",
      "options": {
        "a": "Dermis",
        "b": "Epidermis",
        "c": "Hypodermis",
        "d": "Subcutaneous layer"
      },
      "answer": "b) Epidermis"
    },
    {
      "question": "Which of the following is a fat-soluble vitamin?",
      "options": {
        "a": "Vitamin C",
        "b": "Vitamin B₁",
        "c": "Vitamin A",
        "d": "Vitamin B₆"
      },
      "answer": "c) Vitamin A"
    },
    {
      "question": "A deficiency of Vitamin D causes:",
      "options": {
        "a": "Scurvy",
        "b": "Rickets",
        "c": "Beri-beri",
        "d": "Night blindness"
      },
      "answer": "b) Rickets"
    },
    {
      "question": "Which hormone is responsible for the 'fight or flight' response?",
      "options": {
        "a": "Insulin",
        "b": "Thyroxine",
        "c": "Adrenaline",
        "d": "Estrogen"
      },
      "answer": "c) Adrenaline"
    },
    {
      "question": "The master gland of the endocrine system is the:",
      "options": {
        "a": "Thyroid gland",
        "b": "Adrenal gland",
        "c": "Pituitary gland",
        "d": "Pancreas"
      },
      "answer": "c) Pituitary gland"
    },
    {
      "question": "Which gland produces growth hormone?",
      "options": {
        "a": "Thyroid gland",
        "b": "Pituitary gland",
        "c": "Adrenal gland",
        "d": "Pancreas"
      },
      "answer": "b) Pituitary gland"
    },
    {
      "question": "Fertilization in humans normally occurs in the:",
      "options": {
        "a": "Uterus",
        "b": "Ovary",
        "c": "Fallopian tube",
        "d": "Vagina"
      },
      "answer": "c) Fallopian tube"
    },
    {
      "question": "The male reproductive organ that produces sperm is the:",
      "options": {
        "a": "Prostate gland",
        "b": "Seminal vesicle",
        "c": "Testis",
        "d": "Epididymis"
      },
      "answer": "c) Testis"
    },
    {
      "question": "Which of the following is a sexually transmitted infection (STI)?",
      "options": {
        "a": "Malaria",
        "b": "Tuberculosis",
        "c": "Gonorrhea",
        "d": "Common cold"
      },
      "answer": "c) Gonorrhea"
    },
    {
      "question": "The process of giving birth is called:",
      "options": {
        "a": "Gestation",
        "b": "Ovulation",
        "c": "Parturition",
        "d": "Menstruation"
      },
      "answer": "c) Parturition"
    },
    {
      "question": "The primary female reproductive organ is the:",
      "options": {
        "a": "Uterus",
        "b": "Ovary",
        "c": "Fallopian tube",
        "d": "Cervix"
      },
      "answer": "b) Ovary"
    },
    {
      "question": "What is the genetic material of most living organisms?",
      "options": {
        "a": "Protein",
        "b": "Carbohydrate",
        "c": "DNA",
        "d": "Lipid"
      },
      "answer": "c) DNA"
    },
    {
      "question": "Who proposed the double helix structure of DNA?",
      "options": {
        "a": "Gregor Mendel",
        "b": "Rosalind Franklin",
        "c": "Watson and Crick",
        "d": "Frederick Griffith"
      },
      "answer": "c) Watson and Crick"
    },
    {
      "question": "The process by which DNA makes a copy of itself is called:",
      "options": {
        "a": "Transcription",
        "b": "Translation",
        "c": "Replication",
        "d": "Mutation"
      },
      "answer": "c) Replication"
    },
    {
      "question": "A segment of DNA that codes for a specific protein is called a:",
      "options": {
        "a": "Chromosome",
        "b": "Gene",
        "c": "Allele",
        "d": "Nucleotide"
      },
      "answer": "b) Gene"
    },
    {
      "question": "Which of the following is NOT a type of RNA?",
      "options": {
        "a": "mRNA",
        "b": "tRNA",
        "c": "rRNA",
        "d": "DNA"
      },
      "answer": "d) DNA"
    },
    {
      "question": "The process of converting genetic information from mRNA into a protein is called:",
      "options": {
        "a": "Transcription",
        "b": "Translation",
        "c": "Replication",
        "d": "Mutation"
      },
      "answer": "b) Translation"
    },
    {
      "question": "Mendel is known for his work on:",
      "options": {
        "a": "Evolution",
        "b": "Genetics",
        "c": "Cell theory",
        "d": "Microbiology"
      },
      "answer": "b) Genetics"
    },
    {
      "question": "The observable characteristics of an organism are called its:",
      "options": {
        "a": "Genotype",
        "b": "Phenotype",
        "c": "Allele",
        "d": "Chromosome"
      },
      "answer": "b) Phenotype"
    },
    {
      "question": "A person with two identical alleles for a particular gene is said to be:",
      "options": {
        "a": "Heterozygous",
        "b": "Homozygous",
        "c": "Dominant",
        "d": "Recessive"
      },
      "answer": "b) Homozygous"
    },
    {
      "question": "Which of the following is a dominant genetic disorder?",
      "options": {
        "a": "Cystic fibrosis",
        "b": "Sickle cell anemia",
        "c": "Huntington's disease",
        "d": "Phenylketonuria"
      },
      "answer": "c) Huntington's disease"
    },
    {
      "question": "The process of gradual change in the characteristics of a population over time is called:",
      "options": {
        "a": "Mutation",
        "b": "Natural selection",
        "c": "Evolution",
        "d": "Genetic drift"
      },
      "answer": "c) Evolution"
    },
    {
      "question": "Who proposed the theory of natural selection?",
      "options": {
        "a": "Lamarck",
        "b": "Mendel",
        "c": "Charles Darwin",
        "d": "Alfred Wallace"
      },
      "answer": "c) Charles Darwin"
    },
    {
      "question": "Fossils provide evidence for:",
      "options": {
        "a": "Continental drift",
        "b": "Evolution",
        "c": "Plate tectonics",
        "d": "Climate change"
      },
      "answer": "b) Evolution"
    },
    {
      "question": "The study of interactions between living organisms and their environment is called:",
      "options": {
        "a": "Botany",
        "b": "Zoology",
        "c": "Ecology",
        "d": "Physiology"
      },
      "answer": "c) Ecology"
    },
    {
      "question": "Which of the following is a producer in an ecosystem?",
      "options": {
        "a": "Lion",
        "b": "Deer",
        "c": "Grass",
        "d": "Mushroom"
      },
      "answer": "c) Grass"
    },
    {
      "question": "Decomposers in an ecosystem are responsible for:",
      "options": {
        "a": "Producing food",
        "b": "Consuming producers",
        "c": "Breaking down dead organic matter",
        "d": "Controlling population"
      },
      "answer": "c) Breaking down dead organic matter"
    },
    {
      "question": "The interconnected feeding relationships in an ecosystem are represented by a:",
      "options": {
        "a": "Food chain",
        "b": "Food web",
        "c": "Pyramid of energy",
        "d": "Biogeochemical cycle"
      },
      "answer": "b) Food web"
    },
    {
      "question": "Which of the following is a greenhouse gas?",
      "options": {
        "a": "Oxygen",
        "b": "Nitrogen",
        "c": "Carbon dioxide",
        "d": "Argon"
      },
      "answer": "c) Carbon dioxide"
    },
    {
      "question": "Deforestation leads to an increase in atmospheric:",
      "options": {
        "a": "Oxygen",
        "b": "Nitrogen",
        "c": "Carbon dioxide",
        "d": "Methane"
      },
      "answer": "c) Carbon dioxide"
    },
    {
      "question": "Biodiversity refers to the variety of:",
      "options": {
        "a": "Species only",
        "b": "Ecosystems only",
        "c": "Genes, species, and ecosystems",
        "d": "None of the above"
      },
      "answer": "c) Genes, species, and ecosystems"
    },
    {
      "question": "The depletion of the ozone layer is caused by:",
      "options": {
        "a": "Carbon dioxide",
        "b": "Methane",
        "c": "Chlorofluorocarbons (CFCs)",
        "d": "Sulfur dioxide"
      },
      "answer": "c) Chlorofluorocarbons (CFCs)"
    },
    {
      "question": "Which of the following is a renewable energy source?",
      "options": {
        "a": "Coal",
        "b": "Petroleum",
        "c": "Solar energy",
        "d": "Natural gas"
      },
      "answer": "c) Solar energy"
    },
    {
      "question": "The conversion of atmospheric nitrogen into usable forms by living organisms is called:",
      "options": {
        "a": "Denitrification",
        "b": "Nitrification",
        "c": "Nitrogen fixation",
        "d": "Ammonification"
      },
      "answer": "c) Nitrogen fixation"
    },
    {
      "question": "Which of the following is a primary consumer?",
      "options": {
        "a": "Carnivore",
        "b": "Herbivore",
        "c": "Omnivore",
        "d": "Decomposer"
      },
      "answer": "b) Herbivore"
    },
    {
      "question": "The maximum population size that an environment can sustain is called its:",
      "options": {
        "a": "Biotic potential",
        "b": "Carrying capacity",
        "c": "Population density",
        "d": "Ecological niche"
      },
      "answer": "b) Carrying capacity"
    },
    {
      "question": "The transfer of energy from one trophic level to the next is approximately:",
      "options": {
        "a": "1%",
        "b": "10%",
        "c": "50%",
        "d": "90%"
      },
      "answer": "b) 10%"
    },
    {
      "question": "Which of the following is a vector-borne disease?",
      "options": {
        "a": "Common cold",
        "b": "Tuberculosis",
        "c": "Malaria",
        "d": "Measles"
      },
      "answer": "c) Malaria"
    },
    {
      "question": "The causative agent of AIDS is:",
      "options": {
        "a": "Bacteria",
        "b": "Virus",
        "c": "Fungus",
        "d": "Protozoa"
      },
      "answer": "b) Virus"
    },
    {
      "question": "Vaccines provide:",
      "options": {
        "a": "Passive immunity",
        "b": "Active immunity",
        "c": "Innate immunity",
        "d": "Herd immunity only"
      },
      "answer": "b) Active immunity"
    },
    {
      "question": "Which of the following is a non-communicable disease?",
      "options": {
        "a": "Influenza",
        "b": "Cholera",
        "c": "Diabetes",
        "d": "Typhoid"
      },
      "answer": "c) Diabetes"
    },
    {
      "question": "The study of diseases and their causes is called:",
      "options": {
        "a": "Anatomy",
        "b": "Physiology",
        "c": "Pathology",
        "d": "Pharmacology"
      },
      "answer": "c) Pathology"
    },
    {
      "question": "Which of the following is a bacterial disease?",
      "options": {
        "a": "Polio",
        "b": "Malaria",
        "c": "Tuberculosis",
        "d": "Measles"
      },
      "answer": "c) Tuberculosis"
    },
    {
      "question": "The practice of growing plants in nutrient solutions without soil is called:",
      "options": {
        "a": "Horticulture",
        "b": "Hydroponics",
        "c": "Aeroponics",
        "d": "Aquaponics"
      },
      "answer": "b) Hydroponics"
    },
    {
      "question": "Genetically modified organisms (GMOs) are created using:",
      "options": {
        "a": "Traditional breeding",
        "b": "Cloning",
        "c": "Genetic engineering",
        "d": "Hybridization"
      },
      "answer": "c) Genetic engineering"
    },
    {
      "question": "Biotechnology involves the use of living organisms for:",
      "options": {
        "a": "Producing medicines",
        "b": "Developing new crops",
        "c": "Treating diseases",
        "d": "All of the above"
      },
      "answer": "d) All of the above"
    },
    {
      "question": "The technique used to amplify a specific DNA sequence is:",
      "options": {
        "a": "Gel electrophoresis",
        "b": "PCR (Polymerase Chain Reaction)",
        "c": "DNA fingerprinting",
        "d": "Cloning"
      },
      "answer": "b) PCR (Polymerase Chain Reaction)"
    },
    {
      "question": "Which of the following is a common application of biotechnology?",
      "options": {
        "a": "Producing antibiotics",
        "b": "Developing biofuels",
        "c": "Gene therapy",
        "d": "All of the above"
      },
      "answer": "d) All of the above"
    }

    ];

    const englishQuestions = 
        [
    {
      "question": "Choose the correct synonym for 'Diligent'.",
      "options": {
        "a": "Lazy",
        "b": "Careful",
        "c": "Industrious",
        "d": "Negligent"
      },
      "answer": "c) Industrious"
    },
    {
      "question": "Select the antonym for 'Ancient'.",
      "options": {
        "a": "Old",
        "b": "Modern",
        "c": "Historical",
        "d": "Primitive"
      },
      "answer": "b) Modern"
    },
    {
      "question": "Identify the word with the correct spelling.",
      "options": {
        "a": "Recieve",
        "b": "Believe",
        "c": "Deceive",
        "d": "Achieve"
      },
      "answer": "d) Achieve"
    },
    {
      "question": "What is the past tense of 'Go'?",
      "options": {
        "a": "Goed",
        "b": "Went",
        "c": "Gone",
        "d": "Going"
      },
      "answer": "b) Went"
    },
    {
      "question": "Fill in the blank with the appropriate article: 'She is ___ honest woman.'",
      "options": {
        "a": "a",
        "b": "an",
        "c": "the",
        "d": "no article"
      },
      "answer": "b) an"
    },
    {
      "question": "Choose the correct preposition: 'He is afraid ___ dogs.'",
      "options": {
        "a": "of",
        "b": "from",
        "c": "with",
        "d": "at"
      },
      "answer": "a) of"
    },
    {
      "question": "Which of the following is a collective noun?",
      "options": {
        "a": "Student",
        "b": "Book",
        "c": "Team",
        "d": "Happiness"
      },
      "answer": "c) Team"
    },
    {
      "question": "Identify the adverb in the sentence: 'She sings beautifully.'",
      "options": {
        "a": "She",
        "b": "sings",
        "c": "beautifully",
        "d": "None of the above"
      },
      "answer": "c) beautifully"
    },
    {
      "question": "What type of sentence is this: 'What a beautiful day!'",
      "options": {
        "a": "Declarative",
        "b": "Imperative",
        "c": "Interrogative",
        "d": "Exclamatory"
      },
      "answer": "d) Exclamatory"
    },
    {
      "question": "Change the following sentence into passive voice: 'She wrote a letter.'",
      "options": {
        "a": "A letter is written by her.",
        "b": "A letter was written by her.",
        "c": "A letter has been written by her.",
        "d": "A letter will be written by her."
      },
      "answer": "b) A letter was written by her."
    },
    {
      "question": "Convert into indirect speech: He said, 'I am happy.'",
      "options": {
        "a": "He said that he is happy.",
        "b": "He said that he was happy.",
        "c": "He says that he was happy.",
        "d": "He said he would be happy."
      },
      "answer": "b) He said that he was happy."
    },
    {
      "question": "Find the error in the sentence: 'Neither of the students were present.'",
      "options": {
        "a": "Neither",
        "b": "of the students",
        "c": "were",
        "d": "present"
      },
      "answer": "c) were"
    },
    {
      "question": "Complete the idiom: 'Bite the ___.'",
      "options": {
        "a": "bullet",
        "b": "dust",
        "c": "hand",
        "d": "tongue"
      },
      "answer": "a) bullet"
    },
    {
      "question": "What is the plural of 'child'?",
      "options": {
        "a": "Childs",
        "b": "Childrens",
        "c": "Children",
        "d": "Childes"
      },
      "answer": "c) Children"
    },
    {
      "question": "Choose the sentence with the correct use of a semicolon.",
      "options": {
        "a": "I like apples; and oranges.",
        "b": "I like apples, and oranges.",
        "c": "I like apples; however, oranges are my favorite.",
        "d": "I like apples; oranges."
      },
      "answer": "c) I like apples; however, oranges are my favorite."
    },
    {
      "question": "Which of the following is a simile?",
      "options": {
        "a": "Life is a journey.",
        "b": "He is as strong as an ox.",
        "c": "The wind whispered secrets.",
        "d": "Time is money."
      },
      "answer": "b) He is as strong as an ox."
    },
    {
      "question": "Identify the direct object in the sentence: 'She bought a new car.'",
      "options": {
        "a": "She",
        "b": "bought",
        "c": "new",
        "d": "car"
      },
      "answer": "d) car"
    },
    {
      "question": "Fill in the blank with the correct form of the verb: 'He ___ to the market yesterday.'",
      "options": {
        "a": "go",
        "b": "goes",
        "c": "went",
        "d": "gone"
      },
      "answer": "c) went"
    },
    {
      "question": "Choose the word that means the opposite of 'optimistic'.",
      "options": {
        "a": "Hopeful",
        "b": "Positive",
        "c": "Pessimistic",
        "d": "Cheerful"
      },
      "answer": "c) Pessimistic"
    },
    {
      "question": "What is the superlative form of 'good'?",
      "options": {
        "a": "Gooder",
        "b": "More good",
        "c": "Best",
        "d": "Goodest"
      },
      "answer": "c) Best"
    },
    {
      "question": "Identify the conjunction in the sentence: 'She is smart and hardworking.'",
      "options": {
        "a": "She",
        "b": "is",
        "c": "smart",
        "d": "and"
      },
      "answer": "d) and"
    },
    {
      "question": "Choose the correct article: 'The sun rises in ___ east.'",
      "options": {
        "a": "a",
        "b": "an",
        "c": "the",
        "d": "no article"
      },
      "answer": "c) the"
    },
    {
      "question": "Which of the following is a proper noun?",
      "options": {
        "a": "City",
        "b": "River",
        "c": "Paris",
        "d": "Building"
      },
      "answer": "c) Paris"
    },
    {
      "question": "What is the passive voice of 'The dog chased the cat.'?",
      "options": {
        "a": "The cat was chased by the dog.",
        "b": "The cat is chased by the dog.",
        "c": "The cat has been chased by the dog.",
        "d": "The cat will be chased by the dog."
      },
      "answer": "a) The cat was chased by the dog."
    },
    {
      "question": "Convert into indirect speech: She asked, 'Are you coming?'",
      "options": {
        "a": "She asked if he is coming.",
        "b": "She asked if he was coming.",
        "c": "She asked whether he is coming.",
        "d": "She asked whether he was coming."
      },
      "answer": "d) She asked whether he was coming."
    },
    {
      "question": "Find the error in the sentence: 'Each of the boys have a pen.'",
      "options": {
        "a": "Each",
        "b": "of the boys",
        "c": "have",
        "d": "a pen"
      },
      "answer": "c) have"
    },
    {
      "question": "Complete the idiom: 'Break a ___!'",
      "options": {
        "a": "leg",
        "b": "heart",
        "c": "promise",
        "d": "record"
      },
      "answer": "a) leg"
    },
    {
      "question": "What is the plural of 'mouse'?",
      "options": {
        "a": "Mouses",
        "b": "Mice",
        "c": "Mousies",
        "d": "Mouse's"
      },
      "answer": "b) Mice"
    },
    {
      "question": "Choose the sentence with the correct use of an apostrophe for possession.",
      "options": {
        "a": "The dogs' tail.",
        "b": "The dog's tail.",
        "c": "The dogs tail.",
        "d": "The dog tail's."
      },
      "answer": "b) The dog's tail."
    },
    {
      "question": "Which of the following is a metaphor?",
      "options": {
        "a": "She is as brave as a lion.",
        "b": "He ran like the wind.",
        "c": "The classroom was a zoo.",
        "d": "Her smile is like sunshine."
      },
      "answer": "c) The classroom was a zoo."
    },
    {
      "question": "Identify the indirect object in the sentence: 'He gave her a book.'",
      "options": {
        "a": "He",
        "b": "gave",
        "c": "her",
        "d": "book"
      },
      "answer": "c) her"
    },
    {
      "question": "Fill in the blank with the correct form of the verb: 'They ___ playing football since morning.'",
      "options": {
        "a": "are",
        "b": "have been",
        "c": "were",
        "d": "had been"
      },
      "answer": "b) have been"
    },
    {
      "question": "Choose the word that means the opposite of 'permanent'.",
      "options": {
        "a": "Lasting",
        "b": "Temporary",
        "c": "Enduring",
        "d": "Fixed"
      },
      "answer": "b) Temporary"
    },
    {
      "question": "What is the comparative form of 'happy'?",
      "options": {
        "a": "Happier",
        "b": "More happy",
        "c": "Happiest",
        "d": "Most happy"
      },
      "answer": "a) Happier"
    },
    {
      "question": "Identify the interjection in the sentence: 'Oh, what a surprise!'",
      "options": {
        "a": "Oh",
        "b": "what",
        "c": "a",
        "d": "surprise"
      },
      "answer": "a) Oh"
    },
    {
      "question": "Choose the correct article: 'I saw ___ elephant in the zoo.'",
      "options": {
        "a": "a",
        "b": "an",
        "c": "the",
        "d": "no article"
      },
      "answer": "b) an"
    },
    {
      "question": "Which of the following is an abstract noun?",
      "options": {
        "a": "Table",
        "b": "Friend",
        "c": "Courage",
        "d": "Water"
      },
      "answer": "c) Courage"
    },
    {
      "question": "What is the passive voice of 'The police caught the thief.'?",
      "options": {
        "a": "The thief was caught by the police.",
        "b": "The thief is caught by the police.",
        "c": "The thief has been caught by the police.",
        "d": "The thief will be caught by the police."
      },
      "answer": "a) The thief was caught by the police."
    },
    {
      "question": "Convert into indirect speech: My mother said, 'The earth is round.'",
      "options": {
        "a": "My mother said that the earth is round.",
        "b": "My mother said that the earth was round.",
        "c": "My mother said the earth will be round.",
        "d": "My mother says that the earth is round."
      },
      "answer": "a) My mother said that the earth is round."
    },
    {
      "question": "Find the error in the sentence: 'She prefer coffee than tea.'",
      "options": {
        "a": "She",
        "b": "prefer",
        "c": "coffee",
        "d": "than"
      },
      "answer": "d) than"
    },
    {
      "question": "Complete the idiom: 'Every cloud has a ___.'",
      "options": {
        "a": "rain",
        "b": "silver lining",
        "c": "storm",
        "d": "dark side"
      },
      "answer": "b) silver lining"
    },
    {
      "question": "What is the plural of 'ox'?",
      "options": {
        "a": "Oxes",
        "b": "Oxen",
        "c": "Oxs",
        "d": "Ox's"
      },
      "answer": "b) Oxen"
    },
    {
      "question": "Choose the sentence with the correct punctuation.",
      "options": {
        "a": "He asked, \"Are you coming?\"",
        "b": "He asked \"Are you coming?\"",
        "c": "He asked, \"Are you coming?\"",
        "d": "He asked, Are you coming?"
      },
      "answer": "a) He asked, \"Are you coming?\""
    },
    {
      "question": "Which of the following is an example of personification?",
      "options": {
        "a": "The sun smiled at us.",
        "b": "He eats like a horse.",
        "c": "She is a walking dictionary.",
        "d": "Life is a dream."
      },
      "answer": "a) The sun smiled at us."
    },
    {
      "question": "Identify the prepositional phrase in the sentence: 'The book is on the table.'",
      "options": {
        "a": "The book",
        "b": "is on",
        "c": "on the table",
        "d": "the table"
      },
      "answer": "c) on the table"
    },
    {
      "question": "Fill in the blank with the correct verb form: 'If I ___ a bird, I would fly.'",
      "options": {
        "a": "am",
        "b": "was",
        "c": "were",
        "d": "had been"
      },
      "answer": "c) were"
    },
    {
      "question": "Choose the word that means the opposite of 'candid'.",
      "options": {
        "a": "Frank",
        "b": "Honest",
        "c": "Deceptive",
        "d": "Open"
      },
      "answer": "c) Deceptive"
    },
    {
      "question": "What is the superlative form of 'bad'?",
      "options": {
        "a": "Badder",
        "b": "Worse",
        "c": "Worst",
        "d": "Baddest"
      },
      "answer": "c) Worst"
    },
    {
      "question": "Identify the type of pronoun: 'This is my book.'",
      "options": {
        "a": "Personal pronoun",
        "b": "Possessive pronoun",
        "c": "Demonstrative pronoun",
        "d": "Reflexive pronoun"
      },
      "answer": "b) Possessive pronoun"
    },
    {
      "question": "Choose the correct article: 'He is ___ university student.'",
      "options": {
        "a": "a",
        "b": "an",
        "c": "the",
        "d": "no article"
      },
      "answer": "a) a"
    },
    {
      "question": "Which of the following is a common noun?",
      "options": {
        "a": "India",
        "b": "Mount Everest",
        "c": "Girl",
        "d": "Friday"
      },
      "answer": "c) Girl"
    },
    {
      "question": "What is the passive voice of 'They are building a house.'?",
      "options": {
        "a": "A house is built by them.",
        "b": "A house is being built by them.",
        "c": "A house has been built by them.",
        "d": "A house was being built by them."
      },
      "answer": "b) A house is being built by them."
    },
    {
      "question": "Convert into indirect speech: He ordered, 'Open the door.'",
      "options": {
        "a": "He ordered that the door be opened.",
        "b": "He ordered to open the door.",
        "c": "He ordered them to open the door.",
        "d": "He ordered that they open the door."
      },
      "answer": "c) He ordered them to open the door."
    },
    {
      "question": "Find the error in the sentence: 'She is junior than me.'",
      "options": {
        "a": "She",
        "b": "is junior",
        "c": "than",
        "d": "me"
      },
      "answer": "c) than"
    },
    {
      "question": "Complete the idiom: 'Speak of the ___.'",
      "options": {
        "a": "devil",
        "b": "truth",
        "c": "matter",
        "d": "word"
      },
      "answer": "a) devil"
    },
    {
      "question": "What is the plural of 'criterion'?",
      "options": {
        "a": "Criterions",
        "b": "Criteria",
        "c": "Criterian",
        "d": "Criterias"
      },
      "answer": "b) Criteria"
    },
    {
      "question": "Choose the sentence with correct capitalization.",
      "options": {
        "a": "i went to new york last year.",
        "b": "I went to New york last year.",
        "c": "I went to New York last year.",
        "d": "i went to New York last year."
      },
      "answer": "c) I went to New York last year."
    },
    {
      "question": "Which of the following is an example of hyperbole?",
      "options": {
        "a": "I'm so hungry I could eat a horse.",
        "b": "The car was a rocket.",
        "c": "She cried a river of tears.",
        "d": "Both a and c"
      },
      "answer": "d) Both a and c"
    },
    {
      "question": "Identify the demonstrative pronoun: 'These are my pens.'",
      "options": {
        "a": "These",
        "b": "are",
        "c": "my",
        "d": "pens"
      },
      "answer": "a) These"
    },
    {
      "question": "Fill in the blank with the correct verb form: 'By next year, I ___ my degree.'",
      "options": {
        "a": "will complete",
        "b": "will be completing",
        "c": "will have completed",
        "d": "would complete"
      },
      "answer": "c) will have completed"
    },
    {
      "question": "Choose the word that means the opposite of 'humble'.",
      "options": {
        "a": "Modest",
        "b": "Arrogant",
        "c": "Meek",
        "d": "Submissive"
      },
      "answer": "b) Arrogant"
    },
    {
      "question": "What is the comparative form of 'little' (in terms of quantity)?",
      "options": {
        "a": "Littler",
        "b": "Less",
        "c": "Least",
        "d": "More little"
      },
      "answer": "b) Less"
    },
    {
      "question": "Identify the preposition in the sentence: 'She walked across the bridge.'",
      "options": {
        "a": "She",
        "b": "walked",
        "c": "across",
        "d": "bridge"
      },
      "answer": "c) across"
    },
    {
      "question": "Choose the correct article: '___ Amazon is the largest river.'",
      "options": {
        "a": "a",
        "b": "an",
        "c": "the",
        "d": "no article"
      },
      "answer": "c) the"
    },
    {
      "question": "Which of the following is a material noun?",
      "options": {
        "a": "Table",
        "b": "Wood",
        "c": "Chair",
        "d": "Book"
      },
      "answer": "b) Wood"
    },
    {
      "question": "What is the passive voice of 'Someone stole my wallet.'?",
      "options": {
        "a": "My wallet was stolen.",
        "b": "My wallet is stolen by someone.",
        "c": "My wallet has been stolen.",
        "d": "My wallet will be stolen."
      },
      "answer": "a) My wallet was stolen."
    },
    {
      "question": "Convert into indirect speech: The teacher said, 'Honesty is the best policy.'",
      "options": {
        "a": "The teacher said that honesty was the best policy.",
        "b": "The teacher said that honesty is the best policy.",
        "c": "The teacher said honesty would be the best policy.",
        "d": "The teacher says that honesty is the best policy."
      },
      "answer": "b) The teacher said that honesty is the best policy."
    },
    {
      "question": "Find the error in the sentence: 'He is good in Mathematics.'",
      "options": {
        "a": "He",
        "b": "is good",
        "c": "in",
        "d": "Mathematics"
      },
      "answer": "c) in"
    },
    {
      "question": "Complete the idiom: 'Hit the ___.'",
      "options": {
        "a": "book",
        "b": "road",
        "c": "nail on the head",
        "d": "Both b and c"
      },
      "answer": "d) Both b and c"
    },
    {
      "question": "What is the plural of 'phenomenon'?",
      "options": {
        "a": "Phenomenons",
        "b": "Phenomena",
        "c": "Phenomenon's",
        "d": "Phenomenones"
      },
      "answer": "b) Phenomena"
    },
    {
      "question": "Choose the sentence with the correct use of commas.",
      "options": {
        "a": "I like apples, bananas and oranges.",
        "b": "I like apples, bananas, and oranges.",
        "c": "I like apples bananas and oranges.",
        "d": "I like, apples, bananas, and oranges."
      },
      "answer": "b) I like apples, bananas, and oranges."
    },
    {
      "question": "Which of the following is an onomatopoeia?",
      "options": {
        "a": "The car zoomed past.",
        "b": "The silence was deafening.",
        "c": "She is a ray of sunshine.",
        "d": "Time flies."
      },
      "answer": "a) The car zoomed past."
    },
    {
      "question": "Identify the reflexive pronoun: 'He hurt himself.'",
      "options": {
        "a": "He",
        "b": "hurt",
        "c": "himself",
        "d": "None of the above"
      },
      "answer": "c) himself"
    },
    {
      "question": "Fill in the blank with the correct verb form: 'She ___ reading a book when I saw her.'",
      "options": {
        "a": "is",
        "b": "was",
        "c": "has been",
        "d": "had been"
      },
      "answer": "b) was"
    },
    {
      "question": "Choose the word that means the opposite of 'benevolent'.",
      "options": {
        "a": "Kind",
        "b": "Generous",
        "c": "Malicious",
        "d": "Compassionate"
      },
      "answer": "c) Malicious"
    },
    {
      "question": "What is the superlative form of 'far'?",
      "options": {
        "a": "Farther",
        "b": "Further",
        "c": "Farthest",
        "d": "Furthest"
      },
      "answer": "c) Farthest"
    },
    {
      "question": "Identify the adverb of frequency: 'She always comes on time.'",
      "options": {
        "a": "She",
        "b": "always",
        "c": "comes",
        "d": "time"
      },
      "answer": "b) always"
    },
    {
      "question": "Choose the correct article: 'I live in ___ apartment.'",
      "options": {
        "a": "a",
        "b": "an",
        "c": "the",
        "d": "no article"
      },
      "answer": "b) an"
    },
    {
      "question": "Which of the following is a compound noun?",
      "options": {
        "a": "Girlfriend",
        "b": "Friendship",
        "c": "Running",
        "d": "Beautiful"
      },
      "answer": "a) Girlfriend"
    },
    {
      "question": "What is the passive voice of 'They will finish the project next week.'?",
      "options": {
        "a": "The project will be finished by them next week.",
        "b": "The project is finished by them next week.",
        "c": "The project has been finished by them next week.",
        "d": "The project would be finished by them next week."
      },
      "answer": "a) The project will be finished by them next week."
    },
    {
      "question": "Convert into indirect speech: He exclaimed, 'How beautiful the flower is!'",
      "options": {
        "a": "He exclaimed that the flower was very beautiful.",
        "b": "He exclaimed how beautiful the flower is.",
        "c": "He exclaimed that the flower is beautiful.",
        "d": "He exclaimed that the flower was beautiful."
      },
      "answer": "a) He exclaimed that the flower was very beautiful."
    },
    {
      "question": "Find the error in the sentence: 'She asked me that why I was late.'",
      "options": {
        "a": "She asked me",
        "b": "that",
        "c": "why I was late",
        "d": "No error"
      },
      "answer": "b) that"
    },
    {
      "question": "Complete the idiom: 'A blessing in ___.'",
      "options": {
        "a": "disguise",
        "b": "heaven",
        "c": "time",
        "d": "disaster"
      },
      "answer": "a) disguise"
    },
    {
      "question": "What is the plural of 'syllabus'?",
      "options": {
        "a": "Syllabuses",
        "b": "Syllabi",
        "c": "Both a and b",
        "d": "Syllabusies"
      },
      "answer": "c) Both a and b"
    },
    {
      "question": "Choose the sentence with the correct use of 'its' or 'it's'.",
      "options": {
        "a": "Its a beautiful day.",
        "b": "It's a beautiful day.",
        "c": "The dog wagged it's tail.",
        "d": "The dog wagged its' tail."
      },
      "answer": "b) It's a beautiful day."
    },
    {
      "question": "Which of the following is an example of oxymoron?",
      "options": {
        "a": "Jumbo shrimp",
        "b": "Pretty ugly",
        "c": "Living dead",
        "d": "All of the above"
      },
      "answer": "d) All of the above"
    },
    {
      "question": "Identify the interrogative pronoun: 'Who broke the window?'",
      "options": {
        "a": "Who",
        "b": "broke",
        "c": "the",
        "d": "window"
      },
      "answer": "a) Who"
    },
    {
      "question": "Fill in the blank with the correct verb form: 'If I had known, I ___ helped you.'",
      "options": {
        "a": "would",
        "b": "would have",
        "c": "will have",
        "d": "had"
      },
      "answer": "b) would have"
    },
    {
      "question": "Choose the word that means the opposite of 'ubiquitous'.",
      "options": {
        "a": "Pervasive",
        "b": "Omnipresent",
        "c": "Rare",
        "d": "Common"
      },
      "answer": "c) Rare"
    },
    {
      "question": "What is the comparative form of 'many'?",
      "options": {
        "a": "Manyer",
        "b": "More",
        "c": "Most",
        "d": "Much"
      },
      "answer": "b) More"
    },
    {
      "question": "Identify the coordinating conjunction: 'He likes to read, but he dislikes writing.'",
      "options": {
        "a": "He",
        "b": "likes",
        "c": "but",
        "d": "writing"
      },
      "answer": "c) but"
    },
    {
      "question": "Choose the correct article: '___ Mount Everest is the highest peak.'",
      "options": {
        "a": "a",
        "b": "an",
        "c": "the",
        "d": "no article"
      },
      "answer": "d) no article"
    },
    {
      "question": "Which of the following is a concrete noun?",
      "options": {
        "a": "Love",
        "b": "Freedom",
        "c": "Chair",
        "d": "Justice"
      },
      "answer": "c) Chair"
    },
    {
      "question": "What is the passive voice of 'The gardener waters the plants every day.'?",
      "options": {
        "a": "The plants are watered by the gardener every day.",
        "b": "The plants were watered by the gardener every day.",
        "c": "The plants have been watered by the gardener every day.",
        "d": "The plants will be watered by the gardener every day."
      },
      "answer": "a) The plants are watered by the gardener every day."
    },
    {
      "question": "Convert into indirect speech: 'Let's go for a walk,' he suggested.",
      "options": {
        "a": "He suggested that we go for a walk.",
        "b": "He suggested going for a walk.",
        "c": "He suggested that we should go for a walk.",
        "d": "Both a and b"
      },
      "answer": "d) Both a and b"
    },
    {
      "question": "Find the error in the sentence: 'Despite of being rich, he is unhappy.'",
      "options": {
        "a": "Despite of",
        "b": "being rich",
        "c": "he is",
        "d": "unhappy"
      },
      "answer": "a) Despite of"
    },
    {
      "question": "Complete the idiom: 'Pull someone's ___.'",
      "options": {
        "a": "leg",
        "b": "arm",
        "c": "hair",
        "d": "chain"
      },
      "answer": "a) leg"
    },
    {
      "question": "What is the plural of 'crisis'?",
      "options": {
        "a": "Crisises",
        "b": "Crises",
        "c": "Crisis's",
        "d": "Crisies"
      },
      "answer": "b) Crises"
    },
    {
      "question": "Choose the sentence with the correct use of 'affect' or 'effect'.",
      "options": {
        "a": "The weather will effect your mood.",
        "b": "The weather will affect your mood.",
        "c": "The effect of the medicine was good.",
        "d": "Both b and c"
      },
      "answer": "d) Both b and c"
    },
    {
      "question": "Which figure of speech is used when a part represents the whole (or vice versa)?",
      "options": {
        "a": "Metonymy",
        "b": "Synecdoche",
        "c": "Alliteration",
        "d": "Assonance"
      },
      "answer": "b) Synecdoche"
    },
    {
      "question": "Identify the relative pronoun: 'This is the boy who won the prize.'",
      "options": {
        "a": "This",
        "b": "boy",
        "c": "who",
        "d": "prize"
      },
      "answer": "c) who"
    },
    {
      "question": "Fill in the blank with the correct verb form: 'She ___ her homework before she went to bed.'",
      "options": {
        "a": "finished",
        "b": "had finished",
        "c": "was finishing",
        "d": "has finished"
      },
      "answer": "b) had finished"
    },
    {
      "question": "Choose the word that means the opposite of 'concise'.",
      "options": {
        "a": "Brief",
        "b": "Terse",
        "c": "Lengthy",
        "d": "Compact"
      },
      "answer": "c) Lengthy"
    },
    {
      "question": "What is the superlative form of 'much'?",
      "options": {
        "a": "Mucher",
        "b": "More",
        "c": "Most",
        "d": "Many"
      },
      "answer": "c) Most"
    },
    {
      "question": "Identify the subordinating conjunction: 'Although it was raining, we went out.'",
      "options": {
        "a": "Although",
        "b": "it was raining",
        "c": "we went out",
        "d": "None of the above"
      },
      "answer": "a) Although"
    },
    {
      "question": "Choose the correct article: 'He is ___ honest man.'",
      "options": {
        "a": "a",
        "b": "an",
        "c": "the",
        "d": "no article"
      },
      "answer": "b) an"
    },
    {
      "question": "Which of the following is a countable noun?",
      "options": {
        "a": "Water",
        "b": "Information",
        "c": "Chair",
        "d": "Advice"
      },
      "answer": "c) Chair"
    },
    {
      "question": "What is the passive voice of 'They have sent the parcel.'?",
      "options": {
        "a": "The parcel is sent by them.",
        "b": "The parcel was sent by them.",
        "c": "The parcel has been sent by them.",
        "d": "The parcel will be sent by them."
      },
      "answer": "c) The parcel has been sent by them."
    },
    {
      "question": "Convert into indirect speech: The doctor advised him, 'Stop smoking.'",
      "options": {
        "a": "The doctor advised him to stop smoking.",
        "b": "The doctor advised him that he should stop smoking.",
        "c": "The doctor advised him stopping smoking.",
        "d": "The doctor advised him if he stop smoking."
      },
      "answer": "a) The doctor advised him to stop smoking."
    },
    {
      "question": "Find the error in the sentence: 'He confessed his crime to the police.'",
      "options": {
        "a": "He confessed",
        "b": "his crime",
        "c": "to the police",
        "d": "No error"
      },
      "answer": "d) No error"
    },
    {
      "question": "Complete the idiom: 'Once in a blue ___.'",
      "options": {
        "a": "moon",
        "b": "sky",
        "c": "day",
        "d": "light"
      },
      "answer": "a) moon"
    }
  
    ];
    // --- END OF YOUR JSON DATA ---


    const subjects = {
        physics: { name: "Physics", questions: physicsQuestions, score: 0 },
        chemistry: { name: "Chemistry", questions: chemistryQuestions, score: 0 },
        biology: { name: "Biology", questions: biologyQuestions, score: 0 },
        english: { name: "English", questions: englishQuestions, score: 0 }
    };

    const quizMainContainer = document.getElementById('quiz-main-container');
    const quizSummary = document.getElementById('quiz-summary');
    const finalSubmitBtn = document.getElementById('final-submit-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const summaryResultsDiv = document.getElementById('summary-results');

    function renderQuestionsForSubject(subjectId, subjectData) {
        const questionsListDiv = document.querySelector(`.questions-list[data-subject="${subjectId}"]`);
        if (!questionsListDiv) {
            console.error(`Container for subject ${subjectId} not found.`);
            return;
        }

        const questions = subjectData.questions;

        if (!questions || questions.length === 0) {
            questionsListDiv.textContent = `No questions available for ${subjectData.name}.`;
            return;
        }

        questions.forEach((questionData, index) => {
            const questionCard = document.createElement('div');
            questionCard.className = 'question-card';
            questionCard.id = `q-${subjectId}-${index}`; // Unique ID for each card
            questionCard.dataset.answered = 'false'; // Track if question is answered

            const questionText = document.createElement('h2');
            questionText.textContent = `${index + 1}. ${questionData.question}`;
            questionCard.appendChild(questionText);

            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'options-container';

            for (const key in questionData.options) {
                if (questionData.options.hasOwnProperty(key)) {
                    const optionValue = questionData.options[key];
                    const label = document.createElement('label');
                    label.className = 'option-label';
                    label.setAttribute('for', `radio-${subjectId}-${index}-${key}`); // Link label to radio

                    const radio = document.createElement('input');
                    radio.type = 'radio';
                    radio.name = `answer-${subjectId}-${index}`; // Unique name for each question's radio group
                    radio.value = key;
                    radio.id = `radio-${subjectId}-${index}-${key}`; // Unique ID for each radio

                    // Event listener to highlight selected option and show Done button
                    radio.addEventListener('change', function() {
                        // Only proceed if the question hasn't been answered yet
                        if (questionCard.dataset.answered === 'true') return;

                        // Remove 'selected' class from all sibling labels within this question's options
                        optionsContainer.querySelectorAll('.option-label').forEach(lbl => {
                            lbl.classList.remove('selected');
                        });
                        // Add 'selected' class to the currently checked label
                        if (this.checked) {
                            label.classList.add('selected');
                        }

                        // Show the 'Done' button for this question
                        const doneBtn = questionCard.querySelector('.done-btn');
                        if (doneBtn) {
                            doneBtn.style.display = 'inline-block';
                        }
                    });

                    label.appendChild(radio);
                    label.appendChild(document.createTextNode(optionValue));
                    optionsContainer.appendChild(label);
                }
            }
            questionCard.appendChild(optionsContainer);

            const feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'feedback';
            questionCard.appendChild(feedbackDiv);

            const doneBtn = document.createElement('button');
            doneBtn.className = 'button done-btn';
            doneBtn.textContent = 'Done';
            doneBtn.style.display = 'none'; // Initially hidden
            // Use dataset to store info for click handler
            doneBtn.dataset.subjectId = subjectId;
            doneBtn.dataset.questionIndex = index;
            questionCard.appendChild(doneBtn);

            // Event listener for the 'Done' button
            doneBtn.addEventListener('click', function() {
                const clickedSubjectId = this.dataset.subjectId;
                const clickedQuestionIndex = parseInt(this.dataset.questionIndex);
                const currentQuestion = subjects[clickedSubjectId].questions[clickedQuestionIndex];

                const selectedOption = optionsContainer.querySelector(`input[name="answer-${clickedSubjectId}-${clickedQuestionIndex}"]:checked`);

                if (!selectedOption) {
                    feedbackDiv.textContent = 'Please select an answer!';
                    feedbackDiv.className = 'feedback incorrect-feedback';
                    return;
                }

                const userAnswer = selectedOption.value;

                // --- START OF REQUIRED CHANGE ---
                // Safely extract the single-letter correct answer key from currentQuestion.answer
                let correctAnswerKey = currentQuestion.answer;
                // This regex looks for a single character (letter or number) inside parentheses at the start of the string
                const match = correctAnswerKey.match(/^\((\w)\)/); 
                if (match && match[1]) {
                    correctAnswerKey = match[1]; // If a match is found, use the extracted character
                }
                // At this point, correctAnswerKey will *always* be just 'a', 'b', 'c', or 'd'
                // --- END OF REQUIRED CHANGE ---


                // Mark the question as answered
                questionCard.dataset.answered = 'true';
                questionCard.classList.add('answered'); // Add class for CSS to disable hover etc.

                // Disable all radio buttons for this question
                optionsContainer.querySelectorAll(`input[name="answer-${clickedSubjectId}-${clickedQuestionIndex}"]`).forEach(radio => {
                    radio.disabled = true;
                });

                // Highlight correct and incorrect answers
                optionsContainer.querySelectorAll('.option-label').forEach(label => {
                    const radio = label.querySelector('input[type="radio"]');
                    label.classList.remove('selected'); // Remove temporary selection highlight

                    if (radio.value === correctAnswerKey) {
                        label.classList.add('correct');
                    } else if (radio.value === userAnswer) {
                        label.classList.add('incorrect');
                    }
                });

                // --- Customized Feedback Messages ---
                if (userAnswer === correctAnswerKey) {
                    subjects[clickedSubjectId].score++; // Increment score for the subject
                    feedbackDiv.textContent = 'You are doing great Kuhi!👏🔥';
                    feedbackDiv.className = 'feedback correct-feedback';
                } else {
                    // Explicitly show the correct answer for incorrect attempts
                    // Now correctAnswerKey will correctly hold 'a', 'b', 'c', or 'd'
                    feedbackDiv.textContent = `No worries Kuhi, keep going!🤗 The correct answer was: ${currentQuestion.options[correctAnswerKey]}`;
                    feedbackDiv.className = 'feedback incorrect-feedback';
                }
                // --- End Customized Feedback Messages ---

                // Hide the 'Done' button after checking
                doneBtn.style.display = 'none';
            });

            questionsListDiv.appendChild(questionCard);
        });
    }

    // Render questions for each subject
    for (const subjectId in subjects) {
        if (subjects.hasOwnProperty(subjectId)) {
            renderQuestionsForSubject(subjectId, subjects[subjectId]);
        }
    }

    // Final Submit Button Logic
    finalSubmitBtn.addEventListener('click', function() {
        quizMainContainer.style.display = 'none'; // Hide the quiz
        quizSummary.style.display = 'block'; // Show the summary

        summaryResultsDiv.innerHTML = ''; // Clear previous results

        let totalCorrect = 0;
        let totalQuestions = 0;

        for (const subjectId in subjects) {
            if (subjects.hasOwnProperty(subjectId)) {
                const subject = subjects[subjectId];
                totalCorrect += subject.score;
                totalQuestions += subject.questions.length;

                const p = document.createElement('p');
                p.innerHTML = `<strong>${subject.name}:</strong> <span class="correct-score">${subject.score}</span> / ${subject.questions.length} Correct`;
                summaryResultsDiv.appendChild(p);
            }
        }

        const totalP = document.createElement('p');
        totalP.classList.add('total-score-summary');
        totalP.innerHTML = `<strong>Overall Score:</strong> <span class="correct-score">${totalCorrect}</span> / ${totalQuestions}`;
        summaryResultsDiv.appendChild(totalP);
    });

    // Restart Quiz Button Logic
    restartQuizBtn.addEventListener('click', function() {
        // Reset scores
        for (const subjectId in subjects) {
            if (subjects.hasOwnProperty(subjectId)) {
                subjects[subjectId].score = 0;
            }
        }

        // Reset UI for all questions
        document.querySelectorAll('.question-card').forEach(card => {
            card.dataset.answered = 'false';
            card.classList.remove('answered');
            card.querySelector('.feedback').textContent = '';
            card.querySelector('.feedback').className = 'feedback'; // Reset classes

            card.querySelectorAll('.option-label').forEach(label => {
                label.classList.remove('selected', 'correct', 'incorrect');
                const radio = label.querySelector('input[type="radio"]');
                radio.checked = false;
                radio.disabled = false;
            });

            const doneBtn = card.querySelector('.done-btn');
            if (doneBtn) {
                doneBtn.style.display = 'none';
            }
        });

        quizSummary.style.display = 'none'; // Hide summary
        quizMainContainer.style.display = 'block'; // Show quiz
    });
});
