var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec_firstorderodes",
  "level": "1",
  "url": "sec_firstorderodes.html",
  "type": "Section",
  "number": "1.1",
  "title": "Classification of first-order ODEs",
  "body": " Classification of first-order ODEs  Let be a suitably differentiable function of . Recall that derivatives of with respect to can be written as , ,  .  A differential equation is an equation containing the derivatives of one or more unknown functions or dependent variables, with respect to one or more independent variables. A differential equation is called an ordinary differential equation whenever the unknown function has one independent variable. If the unkonwn function has two or more independent variables, then we call it a partial differential equation .    A first-order ordinary differential equation can be written in the form where is the independent variable and is the independent variable.  Most ODEs can't be solved by hand. However, we can solve a number of ODEs of special and useful types. Some of these properties will carry over to higher-order ODEs.  Separable ODEs  A first-order ODE is said to be separable if it can be written in the form for some functions (dependent only on ), and (dependent only on ).    A first-order ODE is said to be autonomous if it can be written in the form . In other words, there is no explicit dependence of the right-hand side on the time variable .    A first-order ODE is said to be linear if it can be written in the form where is called a forcing function (or input or control). If for all , then is called homogeneous . Otherwise, is called nonhomogeneous .    A few things to note about first-order linear ODEs.  A first-order ODE is linear when (or whatever the dependent variable is called) and are both of degree one and the coefficients depend on at most a function of (or whatever the independent variable is called).  can also be written as where is called a differential operator.     Find the order of the differential equation. Is the differential equation linear or nonlinear?, autonomous or nonautonomous?, separable or nonseparable?          "
},
{
  "id": "sec_firstorderodes-2",
  "level": "2",
  "url": "sec_firstorderodes.html#sec_firstorderodes-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential equation ordinary differential equation partial differential equation first-order ordinary differential equation separable autonomous linear homogeneous nonhomogeneous "
},
{
  "id": "sec_malthusiangrowth",
  "level": "1",
  "url": "sec_malthusiangrowth.html",
  "type": "Section",
  "number": "1.2",
  "title": "Malthusian growth and decay",
  "body": " Malthusian growth and decay  The rate of growth (or decay) of a population is proportional to the size of that population at time . Let be the size of the population at time . We write this with the symbol: . To get an equality, we write where is a constant of proportionality, called the growth or decay rate in the context of this model. We can check that for any constant that all functions of the form are solutions to .   Malthusian growth model setup  A biologist starts with 100 cells in a culture. After one day, there are 250 cells in the culture. Write a differential equation that models that population of a bacteria culture if the population grows at a rate proportional to the number of bacteria present at any time (in days).    "
},
{
  "id": "sec_malthusiangrowth-2-12",
  "level": "2",
  "url": "sec_malthusiangrowth.html#sec_malthusiangrowth-2-12",
  "type": "Example",
  "number": "1.2.1",
  "title": "Malthusian growth model setup.",
  "body": " Malthusian growth model setup  A biologist starts with 100 cells in a culture. After one day, there are 250 cells in the culture. Write a differential equation that models that population of a bacteria culture if the population grows at a rate proportional to the number of bacteria present at any time (in days).  "
},
{
  "id": "ch-linearsystems-5",
  "level": "1",
  "url": "ch-linearsystems-5.html",
  "type": "Section",
  "number": "1.3",
  "title": "Newton’s law of heating and cooling",
  "body": " Newton's law of heating and cooling  The rate of change in an object's temperature is proportional to the difference in its temperature and the temperature of its surrounding medium. Let be the temperature of an object at time and be the (constant) temperature of the surrounding environment. Then, where is a constant of proportionality called the heat transfer coefficient. We can check that for any constant , all functions of the form are solutions to .   Newton's law of heating and cooling model setup  Suppose that an object initially having a temperature of 25 F is placed in a large temperature controlled room of 89 F and one hour later the object has a temperature of 37 F. Write a differential equation for the temperature of the object at time (in hours) assuming satisfies Newton's law of heating and cooling.   "
},
{
  "id": "ch-linearsystems-5-3",
  "level": "2",
  "url": "ch-linearsystems-5.html#ch-linearsystems-5-3",
  "type": "Example",
  "number": "1.3.1",
  "title": "Newton’s law of heating and cooling model setup.",
  "body": " Newton's law of heating and cooling model setup  Suppose that an object initially having a temperature of 25 F is placed in a large temperature controlled room of 89 F and one hour later the object has a temperature of 37 F. Write a differential equation for the temperature of the object at time (in hours) assuming satisfies Newton's law of heating and cooling.  "
},
{
  "id": "ch-linearsystems-6",
  "level": "1",
  "url": "ch-linearsystems-6.html",
  "type": "Section",
  "number": "1.4",
  "title": "Kirchhoff’s second law",
  "body": " Kirchhoff's second law  We use to denote the charge (in colombs), to denote the current (in amperes). In a single-loop or series circuit, the sum of the voltage drops across an inductor, resistor, and capacitor is equal to the impressed voltage .  Voltage drop for different electrical components     Inductance  Resistance  Capacitance    Units  henries  Ohms  farads    Electrical law  Faraday's law   Ohm's law   Capacitance law        A circuit with an electrical source, an inductor, a resistor, and a capacitor in a loop back to the electrical source.  A simple circuit with an electrical source, an inductor, a resistor, and a capacitor.   These electrical components connected in different ways lead to a variety of different possible differential equations:  ( circuit):  ( circuit):  ( circuit): later!    Write a differential equation for the circuit for the current when , , , and the impressed voltage is .    The circuit with resistance and capacitance when connected to an AC power source has the following differential equation for charge : It can be shown that a general solution of this differential equation is . Plot the solution for various choices of the parameter .     "
},
{
  "id": "ch-linearsystems-6-2-4",
  "level": "2",
  "url": "ch-linearsystems-6.html#ch-linearsystems-6-2-4",
  "type": "Table",
  "number": "1.4.1",
  "title": "Voltage drop for different electrical components",
  "body": " Voltage drop for different electrical components     Inductance  Resistance  Capacitance    Units  henries  Ohms  farads    Electrical law  Faraday's law   Ohm's law   Capacitance law     "
},
{
  "id": "fig-tikz",
  "level": "2",
  "url": "ch-linearsystems-6.html#fig-tikz",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": "  A circuit with an electrical source, an inductor, a resistor, and a capacitor in a loop back to the electrical source.  A simple circuit with an electrical source, an inductor, a resistor, and a capacitor.   "
},
{
  "id": "ch-linearsystems-6-2-7",
  "level": "2",
  "url": "ch-linearsystems-6.html#ch-linearsystems-6-2-7",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": " Write a differential equation for the circuit for the current when , , , and the impressed voltage is .  "
},
{
  "id": "ch-linearsystems-6-2-8",
  "level": "2",
  "url": "ch-linearsystems-6.html#ch-linearsystems-6-2-8",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": " The circuit with resistance and capacitance when connected to an AC power source has the following differential equation for charge : It can be shown that a general solution of this differential equation is . Plot the solution for various choices of the parameter .   "
},
{
  "id": "section_secondorderchemical",
  "level": "1",
  "url": "section_secondorderchemical.html",
  "type": "Section",
  "number": "1.5",
  "title": "Second-order chemical reactions",
  "body": " Second-order chemical reactions  The Law of Mass states that when temperature is held constant, the range of change in the amount of a compound is proportional to the product of the remaining amounts of chemicals used to form it. Suppose that we start with units of chemical and units of chemical . For every units of chemical used, units of chemical are used when forming a compound . The rate of change in the compound formed is given by the differential equation where is the constant of proportionality.  Suppose two chemicals and are combined to form a compound . Initially, there are units of and units of . For every units of , units of are used to form . After minutes, units of are present. Write a boundary-value problem for , using time in minutes.    "
},
{
  "id": "section_secondorderchemical-2-13",
  "level": "2",
  "url": "section_secondorderchemical.html#section_secondorderchemical-2-13",
  "type": "Example",
  "number": "1.5.1",
  "title": "",
  "body": " Suppose two chemicals and are combined to form a compound . Initially, there are units of and units of . For every units of , units of are used to form . After minutes, units of are present. Write a boundary-value problem for , using time in minutes.  "
},
{
  "id": "sec_mixtures",
  "level": "1",
  "url": "sec_mixtures.html",
  "type": "Section",
  "number": "1.6",
  "title": "Mixtures",
  "body": " Mixtures  The rate of change in the amount of a substance in a well-mixed solution is equal to the input rate in of that substance minus its output rate. Let denote the amount of a substance at time . Further, let be the flow in, let be the concentration in, and let be the flow out. Notice that the rate . So the volume in the tank is given by  Volume in the tank at integer time steps    Time  Volume                        Then the rate of change of is given by   An tank is filled with containing of salt. Brine containing is pumped into the tank at a rate of . The well-mixed solution is then pumped out at a rate of . Find a differential equation for the amount of salt in the tank at time (in minutes).    "
},
{
  "id": "sec_mixtures-2-7",
  "level": "2",
  "url": "sec_mixtures.html#sec_mixtures-2-7",
  "type": "Table",
  "number": "1.6.1",
  "title": "Volume in the tank at integer time steps",
  "body": " Volume in the tank at integer time steps    Time  Volume                        "
},
{
  "id": "sec_mixtures-2-10",
  "level": "2",
  "url": "sec_mixtures.html#sec_mixtures-2-10",
  "type": "Example",
  "number": "1.6.2",
  "title": "",
  "body": " An tank is filled with containing of salt. Brine containing is pumped into the tank at a rate of . The well-mixed solution is then pumped out at a rate of . Find a differential equation for the amount of salt in the tank at time (in minutes).  "
},
{
  "id": "ch-linearsystems-9",
  "level": "1",
  "url": "ch-linearsystems-9.html",
  "type": "Section",
  "number": "1.7",
  "title": "Verhulst (\"logistic\") and Gompertz population models",
  "body": " Verhulst (\"logistic\") and Gompertz population models  Consider a population that has a maximum possible size, called the carrying capacity of the population. We will use a constant to denote the carrying capacity. However, carrying capacity of a population can change in many ways, such as from a lack of resources, the spread of disease, or the development of a new technology, but we will only consider populations having a constant carrying capacity here. The Malthusian model of is a crude population model that does allow carrying capacity to be considered. We consider below two population models that take carrying capcity into account.   Verhulst (\"logistic\") model  The Verhult model (also called \"logistic model\") says that the rate of change of the size of the population is proportional to the size of the population multiplied by the proportion that the environment can handle where the proportionality constant is the growth rate and is the carrying capacity.  If the population at time , , is less than , then we observe that the proportion of population that the environment can handle is . From this we conclude that the remaining proportion of the population the environment can handle is . In other words, the population can still grow whenever . Similarly, if the population is larger than at time , then we conclude that , meaning the population must shrink since its size is beyond the carrying capacity of the environment. We summarize this in the following table.  Signs of in the Verhulst model    Relation between and  Sign of  Sign of  Effect on solution curve       Increasing at time       Unchanging at time       Decreasing at time        Gompertz model  The Gompertz model works similarly to the Verhulst model, except instead of multiplying by , we instead multiply by  This model captures the carrying capacity idea because if , then . Since the logarithm function is positive for any input larger than , we obtain that is a positive quantity, so the right-hand side of the differential equation will also be positive.   "
},
{
  "id": "ch-linearsystems-9-3-3-11",
  "level": "2",
  "url": "ch-linearsystems-9.html#ch-linearsystems-9-3-3-11",
  "type": "Table",
  "number": "1.7.1",
  "title": "Signs of <span class=\"process-math\">\\(\\dfrac{\\mathrm{d}P}{\\mathrm{d}t}\\)<\/span> in the Verhulst model",
  "body": " Signs of in the Verhulst model    Relation between and  Sign of  Sign of  Effect on solution curve       Increasing at time       Unchanging at time       Decreasing at time    "
},
{
  "id": "ch-linearsystems-10",
  "level": "1",
  "url": "ch-linearsystems-10.html",
  "type": "Section",
  "number": "1.8",
  "title": "Initial value problems",
  "body": " Initial value problems   Types of solutions    Explicit versus implicit solutions  An explicit solution to on an interval is a function of such that when substituted into results in an identity. We will see later that all linear ODEs will give us an explicit solution, but for higher-order linear ODEs, some explicit solutions can be expressed in multiple different ways. An implicit solution to on a region in the plane is a relation that when differentiated implicitly results in the ODE .    Determine if the following functions represent an explicit solution to the differential equation on the interval .        Determine if represents an implicit solution to on .      Initial value problems  Solutions to can also be described by the number of parameters (arbitrary constants) that show up in its solution. For a linear ODE, a family of solutions represents all possible solutions.  Some first-order ODEs and their explicit solutions    ODE  Solution                Each of the solutions in Table depend on a constant , which may change while keeping the resulting function a solution of the differential equation. Unless we have more information to work with, we cannot determine a value for . That is precisely the role of an initial value problem , which is a differential equation equipped with some values of the solution function (and possibly its derivatives) at an initial point . We express a first-order initial value problem based on as   Consider the differential equation with the one-parameter family of solutions given by . Notice that is also a solution, often called the trivial solution . However, we cannot obtain the trivial solution by a choice of in the solution family.     Consider the differential equation with the one-parameter family of solutions given by . Suppose we want a particular solution curve in the family of solutions that goes through the point , or in terms of the solution , it obeys the initial condition  . The general solution of this differential equation is . Find the value of that plots the solution obeying the initial condition and alter the code in the box below to plot the correct solution.In the code box below, plot the solution corresponding to the initial condition given that the general solution     Consider with the one-parameter family of solutions given by . Find all solutions that satisfy the initial condition .  The previous example raises two fundamental questions that we can ask about any initial value problem:  Existence - is there a solution matching my initial data?  Uniqueness - is it the only such solution?    Existence and uniqueness for first-order linear IVPs  Consider the linear IVP we obtain from and as guides: Rewriting it into standard form  where and implies that is guaranteed to have a unique solution if and are both continuous on an open interval containing . The largest such interval is called the interval of definition for the IVP .    Find the largest interval where the initial value problem is guaranteed a unique solution.      When solving a linear IVP, the interval where our solutions are defined always matters! Our solution may also not be defined the same way over the entire interval.   Consider the IVP where . Its solution is of the form .    Existence and uniqueness for first-order (nonlinear) IVPs   The IVP is guaranteed to have a unique solution on a region in the plane containing the point provided that both and are continuous on .    later!     Consider the differential equation . Determine a region in the plane for the differential equation to have a unique solution through each point . Plot the region.     "
},
{
  "id": "ch-linearsystems-10-2-2-1",
  "level": "2",
  "url": "ch-linearsystems-10.html#ch-linearsystems-10-2-2-1",
  "type": "Definition",
  "number": "1.8.1",
  "title": "Explicit versus implicit solutions.",
  "body": " Explicit versus implicit solutions  An explicit solution to on an interval is a function of such that when substituted into results in an identity. We will see later that all linear ODEs will give us an explicit solution, but for higher-order linear ODEs, some explicit solutions can be expressed in multiple different ways. An implicit solution to on a region in the plane is a relation that when differentiated implicitly results in the ODE .  "
},
{
  "id": "ch-linearsystems-10-2-2-2",
  "level": "2",
  "url": "ch-linearsystems-10.html#ch-linearsystems-10-2-2-2",
  "type": "Example",
  "number": "1.8.2",
  "title": "",
  "body": " Determine if the following functions represent an explicit solution to the differential equation on the interval .      "
},
{
  "id": "ch-linearsystems-10-2-2-3",
  "level": "2",
  "url": "ch-linearsystems-10.html#ch-linearsystems-10-2-2-3",
  "type": "Example",
  "number": "1.8.3",
  "title": "",
  "body": " Determine if represents an implicit solution to on .  "
},
{
  "id": "table_firstorderexamples",
  "level": "2",
  "url": "ch-linearsystems-10.html#table_firstorderexamples",
  "type": "Table",
  "number": "1.8.4",
  "title": "Some first-order ODEs and their explicit solutions",
  "body": " Some first-order ODEs and their explicit solutions    ODE  Solution                "
},
{
  "id": "ch-linearsystems-10-3-4-1",
  "level": "2",
  "url": "ch-linearsystems-10.html#ch-linearsystems-10-3-4-1",
  "type": "Example",
  "number": "1.8.5",
  "title": "",
  "body": " Consider the differential equation with the one-parameter family of solutions given by . Suppose we want a particular solution curve in the family of solutions that goes through the point , or in terms of the solution , it obeys the initial condition  . The general solution of this differential equation is . Find the value of that plots the solution obeying the initial condition and alter the code in the box below to plot the correct solution.In the code box below, plot the solution corresponding to the initial condition given that the general solution   "
},
{
  "id": "ch-linearsystems-10-3-4-2",
  "level": "2",
  "url": "ch-linearsystems-10.html#ch-linearsystems-10-3-4-2",
  "type": "Example",
  "number": "1.8.6",
  "title": "",
  "body": " Consider with the one-parameter family of solutions given by . Find all solutions that satisfy the initial condition .  "
},
{
  "id": "ch-linearsystems-10-3-4-4",
  "level": "2",
  "url": "ch-linearsystems-10.html#ch-linearsystems-10-3-4-4",
  "type": "Theorem",
  "number": "1.8.7",
  "title": "Existence and uniqueness for first-order linear IVPs.",
  "body": " Existence and uniqueness for first-order linear IVPs  Consider the linear IVP we obtain from and as guides: Rewriting it into standard form  where and implies that is guaranteed to have a unique solution if and are both continuous on an open interval containing . The largest such interval is called the interval of definition for the IVP .  "
},
{
  "id": "ch-linearsystems-10-3-4-5",
  "level": "2",
  "url": "ch-linearsystems-10.html#ch-linearsystems-10-3-4-5",
  "type": "Example",
  "number": "1.8.8",
  "title": "",
  "body": " Find the largest interval where the initial value problem is guaranteed a unique solution.      "
},
{
  "id": "ch-linearsystems-10-3-5",
  "level": "2",
  "url": "ch-linearsystems-10.html#ch-linearsystems-10-3-5",
  "type": "Example",
  "number": "1.8.9",
  "title": "",
  "body": " Consider the IVP where . Its solution is of the form .  "
},
{
  "id": "ch-linearsystems-10-3-6",
  "level": "2",
  "url": "ch-linearsystems-10.html#ch-linearsystems-10-3-6",
  "type": "Theorem",
  "number": "1.8.10",
  "title": "Existence and uniqueness for first-order (nonlinear) IVPs.",
  "body": " Existence and uniqueness for first-order (nonlinear) IVPs   The IVP is guaranteed to have a unique solution on a region in the plane containing the point provided that both and are continuous on .    later!   "
},
{
  "id": "ch-linearsystems-10-3-7",
  "level": "2",
  "url": "ch-linearsystems-10.html#ch-linearsystems-10-3-7",
  "type": "Example",
  "number": "1.8.11",
  "title": "",
  "body": " Consider the differential equation . Determine a region in the plane for the differential equation to have a unique solution through each point . Plot the region.   "
},
{
  "id": "ch-linearsystems-11",
  "level": "1",
  "url": "ch-linearsystems-11.html",
  "type": "Section",
  "number": "1.9",
  "title": "Behavior of solutions without solving",
  "body": " Behavior of solutions without solving  While most differential equations can't be solved by hand, that doesn't mean we can't describe the behavior of their solutions.   Direction fields    Direction fields (also called slope fields)  A direction field for is a collection of slopes at points on solution curves. Visually, direction fields represent the approximate \"flow of solutions\" among a family of solution curves.    We now consider the differential equation . First isolate to obtain . We see that we have put this differential equation into the form with . That function gives us the slope at each point in the plane. It turns out we can write an explicit general solution as . We now use this to explore the initial value problem .     Modify the above code to plot the slope field and solution of the IVP which has general solution        Euler's method  From calculus, we know that tangent lines (or linear approximation) can be used to estimate a differentiable function at some value . In a similar manner, we would like to approximate the solution of an IVP.  Euler's method  Consider the IVP . Euler's method with stepsize consists of applying the recurrence relation to calculate the successive approximations to exact solution values at the points , respectively.  Consider the equally spaced points . At the point , the slope of the solution to is . The corresponding tangent line at is . Using this line to estimate where , we have Similarly, we can use the new line to approximate where to get And so on. Thus, we have the recurrence relations for  and which are seeded with the initial value problem's given data .    Use Euler's method with and to approximate the solution of the IVP for . It turns out that the exact solution to this IVP is . We will learn how to find such solutions later on.       Autonomous ODEs  Recall the form of an autonomous first-order ODE . Since the independent variable does not appear in the right-hand side explicitly, we can study the behavior of its solutions and sketch typical solution curves without finding an explicit or implicit solution. Recall from calculus that we can sketch a function by knowing where it is increasing and decreasing, which we find by locating the critical points , i.e. the values of so that . There are three types of critical points. A critical point is...  asymptotically stable if as , the solution curve tends toward the horizontal line ,  unstable if as , the solution curve moves away from the horizontal line , and  semi-stable if the solution curve moves either towards or away from the line , depending on on whether the solution it is above or below that line at time .    Find the critical points of the differential equation .     Consider the differential equation .  Find the critical points. Classify each critical point as either asymptotically stable, unstable, or semi-stable. Sketch the appropriate phase portrait.  Sketch the typical solution curves in regions in the plane determined by the graphs of the equilibrium solutions.      Suppose two chemicals and are combined to form the compound as was studied in . Initially, there are units of and units of . For every units of , units of are used to form the compound . It is observed that units of are formed after minutes.  Set up the boundary value problem.  Find the order of the differential equation. Is it (non)linear, (non)automous, and (non)separable?  What is the limiting amount of after a long time? How much of and remain after a long time?       "
},
{
  "id": "ch-linearsystems-11-3-2-1",
  "level": "2",
  "url": "ch-linearsystems-11.html#ch-linearsystems-11-3-2-1",
  "type": "Definition",
  "number": "1.9.1",
  "title": "Direction fields (also called slope fields).",
  "body": " Direction fields (also called slope fields)  A direction field for is a collection of slopes at points on solution curves. Visually, direction fields represent the approximate \"flow of solutions\" among a family of solution curves.  "
},
{
  "id": "ch-linearsystems-11-3-4-1",
  "level": "2",
  "url": "ch-linearsystems-11.html#ch-linearsystems-11-3-4-1",
  "type": "Example",
  "number": "1.9.2",
  "title": "",
  "body": " Modify the above code to plot the slope field and solution of the IVP which has general solution    "
},
{
  "id": "ch-linearsystems-11-4-2-2",
  "level": "2",
  "url": "ch-linearsystems-11.html#ch-linearsystems-11-4-2-2",
  "type": "Algorithm",
  "number": "1.9.3",
  "title": "Euler’s method.",
  "body": " Euler's method  Consider the IVP . Euler's method with stepsize consists of applying the recurrence relation to calculate the successive approximations to exact solution values at the points , respectively.  Consider the equally spaced points . At the point , the slope of the solution to is . The corresponding tangent line at is . Using this line to estimate where , we have Similarly, we can use the new line to approximate where to get And so on. Thus, we have the recurrence relations for  and which are seeded with the initial value problem's given data .  "
},
{
  "id": "ch-linearsystems-11-4-2-3",
  "level": "2",
  "url": "ch-linearsystems-11.html#ch-linearsystems-11-4-2-3",
  "type": "Example",
  "number": "1.9.4",
  "title": "",
  "body": " Use Euler's method with and to approximate the solution of the IVP for . It turns out that the exact solution to this IVP is . We will learn how to find such solutions later on.   "
},
{
  "id": "ch-linearsystems-11-5-2-8",
  "level": "2",
  "url": "ch-linearsystems-11.html#ch-linearsystems-11-5-2-8",
  "type": "Example",
  "number": "1.9.5",
  "title": "",
  "body": " Find the critical points of the differential equation .  "
},
{
  "id": "ch-linearsystems-11-5-2-9",
  "level": "2",
  "url": "ch-linearsystems-11.html#ch-linearsystems-11-5-2-9",
  "type": "Example",
  "number": "1.9.6",
  "title": "",
  "body": " Consider the differential equation .  Find the critical points. Classify each critical point as either asymptotically stable, unstable, or semi-stable. Sketch the appropriate phase portrait.  Sketch the typical solution curves in regions in the plane determined by the graphs of the equilibrium solutions.    "
},
{
  "id": "ex_chemicalexamplesautonomous",
  "level": "2",
  "url": "ch-linearsystems-11.html#ex_chemicalexamplesautonomous",
  "type": "Example",
  "number": "1.9.7",
  "title": "",
  "body": " Suppose two chemicals and are combined to form the compound as was studied in . Initially, there are units of and units of . For every units of , units of are used to form the compound . It is observed that units of are formed after minutes.  Set up the boundary value problem.  Find the order of the differential equation. Is it (non)linear, (non)automous, and (non)separable?  What is the limiting amount of after a long time? How much of and remain after a long time?    "
},
{
  "id": "ch-linearsystems-12",
  "level": "1",
  "url": "ch-linearsystems-12.html",
  "type": "Section",
  "number": "1.10",
  "title": "Separable differential equations",
  "body": " Separable differential equations  Recall from that first-order separable differential equations take the form . We solve such ODEs by the separation of variables algorithm .  To solve , we \"illegally\" treat as a fraction and rewrite it as and apply an integral on the left to each side to get This is technically an illegal mathematical step because the operation of integration includes its differential, but it nonetheless still works!   Classify and solve .   Continuing with , we ask what amount of the compound there is after minutes.    Consider the differential equation .  Find the order of the differential equation. Is it (non)linear, (non)automous, and (non)separable?  What method(s) can you use to solve this differential equation?  Find an implicit solution to the differential equation.      Consider the differential equation .  Find the order of the differential equation. Is it (non)linear, (non)automous, and (non)separable?  What method(s) can you use to solve this differential equation?  Solve the initial value problem.      "
},
{
  "id": "ch-linearsystems-12-2-4",
  "level": "2",
  "url": "ch-linearsystems-12.html#ch-linearsystems-12-2-4",
  "type": "Algorithm",
  "number": "1.10.1",
  "title": "",
  "body": " To solve , we \"illegally\" treat as a fraction and rewrite it as and apply an integral on the left to each side to get This is technically an illegal mathematical step because the operation of integration includes its differential, but it nonetheless still works!  "
},
{
  "id": "ch-linearsystems-12-2-5",
  "level": "2",
  "url": "ch-linearsystems-12.html#ch-linearsystems-12-2-5",
  "type": "Example",
  "number": "1.10.2",
  "title": "",
  "body": "Classify and solve . "
},
{
  "id": "ch-linearsystems-12-2-6",
  "level": "2",
  "url": "ch-linearsystems-12.html#ch-linearsystems-12-2-6",
  "type": "Example",
  "number": "1.10.3",
  "title": "",
  "body": " Continuing with , we ask what amount of the compound there is after minutes.  "
},
{
  "id": "ch-linearsystems-12-2-7",
  "level": "2",
  "url": "ch-linearsystems-12.html#ch-linearsystems-12-2-7",
  "type": "Example",
  "number": "1.10.4",
  "title": "",
  "body": " Consider the differential equation .  Find the order of the differential equation. Is it (non)linear, (non)automous, and (non)separable?  What method(s) can you use to solve this differential equation?  Find an implicit solution to the differential equation.    "
},
{
  "id": "ch-linearsystems-12-2-8",
  "level": "2",
  "url": "ch-linearsystems-12.html#ch-linearsystems-12-2-8",
  "type": "Example",
  "number": "1.10.5",
  "title": "",
  "body": " Consider the differential equation .  Find the order of the differential equation. Is it (non)linear, (non)automous, and (non)separable?  What method(s) can you use to solve this differential equation?  Solve the initial value problem.    "
},
{
  "id": "ch-linearsystems-13",
  "level": "1",
  "url": "ch-linearsystems-13.html",
  "type": "Section",
  "number": "1.11",
  "title": "First-order linear nonohomogeneous ODEs",
  "body": " First-order linear nonohomogeneous ODEs  Recall a first-order ODE is called linear if it can be written in the form , where it is called homogeneous whenever for all and nonohomogeneous whenenever there exists some such that . Notice that if is homogeneous, then it is separable and if is not homogeneous, then it is not separable. However, there always exists a function , called the integrating factor that when multiplied to both sides allows us to integrate both sides with respect to .   The integrating factor for is .    later!     Integrating factor method  To solve , we do the following steps.  Put into standard form.  Find the integrating factor .  Multiply both sides of by .  Rewrite the left-hand side using the product rule as , which will always happen if you computed correctly.  Integrate both sides with respect to .  Solve the resulting equation for .  If you have an initial condition, then use it to find the constant of integration    It is important to note that can only be done on equations of form . All solutions of take the form , where is the homogeneous solution , i.e. the solution of the homogeneous analogue of equation obtained when the right-hand side is set equal to zero for all and solves itself. This occurs because of the nature of the homogeneous solution: it disappears when substituted into the ODE (think about why that is)!  Consider the initial value problem .  Find the order of the differential equation. Is it (non)linear, (non)automous, and (non)separable?  What method(s) can you use to solve this differential equation?  Solve the initial value problem.      Consider the differential equation .  Find the order of the differential equation. Is it (non)linear, (non)automous, and (non)separable?  What method(s) can you use to solve this differential equation?  Find an explicit solution to the differential equation.      Consider the differential equation .  Find the order of the differential equation. Is it (non)linear, (non)automous, and (non)separable?  What method(s) can you use to solve this differential equation?  Find an explicit solution to the differential equation.      Recall . A tank is filled with of pure water. Brine containing of salt is pumped into the tank at a rate of . The well mixed solution is then pumped out at a rate of . Let represent the amount of salt in the tank.  Set up the IVP. Find the order of the differential equation. Is the differential equation (non)linear, (non)autonomous, (non)separable?  What method(s) can you use to solve this differential equation?  Solve the initial value problem.      "
},
{
  "id": "ch-linearsystems-13-2-11",
  "level": "2",
  "url": "ch-linearsystems-13.html#ch-linearsystems-13-2-11",
  "type": "Theorem",
  "number": "1.11.1",
  "title": "",
  "body": "  The integrating factor for is .    later!   "
},
{
  "id": "alg_integratingfactormethod",
  "level": "2",
  "url": "ch-linearsystems-13.html#alg_integratingfactormethod",
  "type": "Algorithm",
  "number": "1.11.2",
  "title": "Integrating factor method.",
  "body": " Integrating factor method  To solve , we do the following steps.  Put into standard form.  Find the integrating factor .  Multiply both sides of by .  Rewrite the left-hand side using the product rule as , which will always happen if you computed correctly.  Integrate both sides with respect to .  Solve the resulting equation for .  If you have an initial condition, then use it to find the constant of integration    "
},
{
  "id": "ch-linearsystems-13-2-24",
  "level": "2",
  "url": "ch-linearsystems-13.html#ch-linearsystems-13-2-24",
  "type": "Example",
  "number": "1.11.3",
  "title": "",
  "body": " Consider the initial value problem .  Find the order of the differential equation. Is it (non)linear, (non)automous, and (non)separable?  What method(s) can you use to solve this differential equation?  Solve the initial value problem.    "
},
{
  "id": "ch-linearsystems-13-2-25",
  "level": "2",
  "url": "ch-linearsystems-13.html#ch-linearsystems-13-2-25",
  "type": "Example",
  "number": "1.11.4",
  "title": "",
  "body": " Consider the differential equation .  Find the order of the differential equation. Is it (non)linear, (non)automous, and (non)separable?  What method(s) can you use to solve this differential equation?  Find an explicit solution to the differential equation.    "
},
{
  "id": "ch-linearsystems-13-2-26",
  "level": "2",
  "url": "ch-linearsystems-13.html#ch-linearsystems-13-2-26",
  "type": "Example",
  "number": "1.11.5",
  "title": "",
  "body": " Consider the differential equation .  Find the order of the differential equation. Is it (non)linear, (non)automous, and (non)separable?  What method(s) can you use to solve this differential equation?  Find an explicit solution to the differential equation.    "
},
{
  "id": "ch-linearsystems-13-2-27",
  "level": "2",
  "url": "ch-linearsystems-13.html#ch-linearsystems-13-2-27",
  "type": "Example",
  "number": "1.11.6",
  "title": "",
  "body": " Recall . A tank is filled with of pure water. Brine containing of salt is pumped into the tank at a rate of . The well mixed solution is then pumped out at a rate of . Let represent the amount of salt in the tank.  Set up the IVP. Find the order of the differential equation. Is the differential equation (non)linear, (non)autonomous, (non)separable?  What method(s) can you use to solve this differential equation?  Solve the initial value problem.    "
},
{
  "id": "ch-linearsystems-14",
  "level": "1",
  "url": "ch-linearsystems-14.html",
  "type": "Section",
  "number": "1.12",
  "title": "Exact equations",
  "body": " Exact equations  In Calculus 3, we are often interested in level curves of the form , where is an arbitrary constant. If we differentiate with respect to , we get which simplifies (with \"partial derivative\" notation) to . Solving this for then yields the differential equation Some first-order nonlinear, nonseparable ODEs can be solved by hand. To do so, we interpret in differential form as We use to look for (implicit) solutions of the form .  Exact equations  The differential form is said to be exact in a region in the plane if there exists a function such that and for all .    Test for exactness  Suppose and have continuous first-order partial derivatives in a region in the plane. Then is exact on if and only if for all .    Let be exact. To solve it, we do the following.  Integrate with respect to to get for some unknown function .  Integrate with respect to to get , for some unknown function .  Compare like and unique terms to find .  Write an implicit solution of the form .      Consider the differential form .  Find the order of the differential equation. Is it (non)linear, (non)autonomous, and (non)separable?  What method(s) can you use to solve this differential equation?  Find an implicit solution.      Consider the differential form . Show this equation is not exact.    If the differential form is not exact, but there is a function so that then the function is called an integrating factor for . When using such an integrating factor, it is possible to gain or lose solutions.    Suppose that the differential form is not exact.  If is continuous and depends only on , then we can take the integrating factor to be   If is continuous and depends only on , then we can take the integrating factor to be     Consider the differential form .  Find the order of the differential equation. Is it (non)linear, (non)autonomous, and (non)separable?  What method(s) can you use to solve this differential equation?  Find an implicit solution.      Consider the differential form .  Find the order of the differential equation. Is it (non)linear, (non)autonomous, and (non)separable?  What method(s) can you use to solve this differential equation?  Find an implicit solution.      Consider the differential form .  Show that this equation is not exact.  Show that this equation becomes exact when both sides are multiplied by the integrating factor . Find an implicit solution.      "
},
{
  "id": "ch-linearsystems-14-2-13",
  "level": "2",
  "url": "ch-linearsystems-14.html#ch-linearsystems-14-2-13",
  "type": "Definition",
  "number": "1.12.1",
  "title": "Exact equations.",
  "body": " Exact equations  The differential form is said to be exact in a region in the plane if there exists a function such that and for all .  "
},
{
  "id": "ch-linearsystems-14-2-14",
  "level": "2",
  "url": "ch-linearsystems-14.html#ch-linearsystems-14-2-14",
  "type": "Theorem",
  "number": "1.12.2",
  "title": "Test for exactness.",
  "body": " Test for exactness  Suppose and have continuous first-order partial derivatives in a region in the plane. Then is exact on if and only if for all .  "
},
{
  "id": "ch-linearsystems-14-2-15",
  "level": "2",
  "url": "ch-linearsystems-14.html#ch-linearsystems-14-2-15",
  "type": "Algorithm",
  "number": "1.12.3",
  "title": "",
  "body": " Let be exact. To solve it, we do the following.  Integrate with respect to to get for some unknown function .  Integrate with respect to to get , for some unknown function .  Compare like and unique terms to find .  Write an implicit solution of the form .    "
},
{
  "id": "ch-linearsystems-14-2-16",
  "level": "2",
  "url": "ch-linearsystems-14.html#ch-linearsystems-14-2-16",
  "type": "Example",
  "number": "1.12.4",
  "title": "",
  "body": " Consider the differential form .  Find the order of the differential equation. Is it (non)linear, (non)autonomous, and (non)separable?  What method(s) can you use to solve this differential equation?  Find an implicit solution.    "
},
{
  "id": "ch-linearsystems-14-2-17",
  "level": "2",
  "url": "ch-linearsystems-14.html#ch-linearsystems-14-2-17",
  "type": "Example",
  "number": "1.12.5",
  "title": "",
  "body": " Consider the differential form . Show this equation is not exact.  "
},
{
  "id": "ch-linearsystems-14-2-18",
  "level": "2",
  "url": "ch-linearsystems-14.html#ch-linearsystems-14-2-18",
  "type": "Definition",
  "number": "1.12.6",
  "title": "",
  "body": " If the differential form is not exact, but there is a function so that then the function is called an integrating factor for . When using such an integrating factor, it is possible to gain or lose solutions.  "
},
{
  "id": "ch-linearsystems-14-2-19",
  "level": "2",
  "url": "ch-linearsystems-14.html#ch-linearsystems-14-2-19",
  "type": "Theorem",
  "number": "1.12.7",
  "title": "",
  "body": " Suppose that the differential form is not exact.  If is continuous and depends only on , then we can take the integrating factor to be   If is continuous and depends only on , then we can take the integrating factor to be   "
},
{
  "id": "ch-linearsystems-14-2-20",
  "level": "2",
  "url": "ch-linearsystems-14.html#ch-linearsystems-14-2-20",
  "type": "Example",
  "number": "1.12.8",
  "title": "",
  "body": " Consider the differential form .  Find the order of the differential equation. Is it (non)linear, (non)autonomous, and (non)separable?  What method(s) can you use to solve this differential equation?  Find an implicit solution.    "
},
{
  "id": "ch-linearsystems-14-2-21",
  "level": "2",
  "url": "ch-linearsystems-14.html#ch-linearsystems-14-2-21",
  "type": "Example",
  "number": "1.12.9",
  "title": "",
  "body": " Consider the differential form .  Find the order of the differential equation. Is it (non)linear, (non)autonomous, and (non)separable?  What method(s) can you use to solve this differential equation?  Find an implicit solution.    "
},
{
  "id": "ch-linearsystems-14-2-22",
  "level": "2",
  "url": "ch-linearsystems-14.html#ch-linearsystems-14-2-22",
  "type": "Example",
  "number": "1.12.10",
  "title": "",
  "body": " Consider the differential form .  Show that this equation is not exact.  Show that this equation becomes exact when both sides are multiplied by the integrating factor . Find an implicit solution.    "
},
{
  "id": "ch2-higherorderodes-3",
  "level": "1",
  "url": "ch2-higherorderodes-3.html",
  "type": "Section",
  "number": "2.1",
  "title": "Higher-order homogeneous equations",
  "body": " Higher-order homogeneous equations   Suppose an object with mass (in kilograms ) hangs vertically at equilibrium on a spring. When the spring is stretched meters, there is a corresponding restoring force (in newtons ). When the object moves at a velocity , surrounding medium exerts a corresponding damping force (in newtons ). Initially, the object is released with an initial poisition and an initial velocity . Write a differential equation for the spring mass when there is an external force by .  Here, we treat the downward direction as the positive direction.    Higher-order linear ODEs  An th-order linear ODE is of the form where is called a forcing function, input, or control. If for all (on some interval ), then we call  homogeneous : If for even one value , then is nonhomogeneous .    Existence and uniqueness for second-order linear IVPs  Consider the IVP Rewriting in standard form as  is guaranteed to have a unique solution if , , and are all continuous on an open interval containing . The largest such interval is called the interval of definition for the IVP.    Find the largest interval where the IVP is guaranteed a unique solution.        Homogeneous solutions  An explicit solution to on some interval is a function that, when substitued into , results in an identity.    Consider the differential equation . Determine the following are solutions for :        Consider the differential equation . Given that and are solutions on , show that the following are also solutions on :   for an arbitrary constant  for arbitrary constants      Hyperbolic trigonometric functions  Recall the hyperbolic sine is and the hyperbolic cosine is .    Superposition principle  Let be solutions to on an interval . Then the linear combination for arbitrary constants is also a solution to on .    Recall that for linear equations, a family of solutions represents all possible solutions on . Given a linear homogeneous ODE and a set of functions contiuous on , we have the following questions:  Are they really solutions?  Are they \"different\" solutions?  Do we have all solutions?      Linear independence  A set of functions are called linearly independent on an interval if and only if the equation holds for all in only when . If there are nonzero constants such that for all in , , then we say that are linearly dependent .    Let , , and .  Show that and are linearly independent on .  Show that and are linearly independent on .  Show that and are linearly independent on .  Determine if , , and are linearly independent on .      Let and .  Determine if and are linearly independent on .  Determine if and are linearly independent on .  Determine if and are linearly independent on any interval containing .      The Wronskian  The set of functions in are linearly independent on if and only if the Wronskian     Determine whether is a linearly independent set on .    Fundamental set of solutions (FSS)  Let be functions in . Then form a fundamental set of solutions to on if  are solutions to on ,  are linearly independent on , and  the number of linearly independent solutions on are equal to the order of .      General solution  Suppose form a fundamental set of solutions to on . Then the linear combination where are arbitrary constants is called a general solution to on .    Consider the differential equation on .  Do and form a fundamental set of solutions to the differential equation on ? State why or why not. If so, then write a general solution.  Do and form a fundamental set of solutions to the differential equation on ? State why or why not. If so, then write a general solution.  Do and form a fundamental set of solutions to the differential equation on ? State why or why not. If so, then write a general solution.      Consider the following differential equations. Along with each equation is a given fact. Give a reason why we may or we may not have a fundamental set of solutions.     Known : Three solutions on   What can go wrong?      Known : Two linearly independent solutions on   What can go wrong?      Known : Three linearly independent solutions on   What can go wrong?      Known : Three linearly independent solutions on   What can go wrong?      "
},
{
  "id": "ch2-higherorderodes-3-2",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-2",
  "type": "Remark",
  "number": "2.1.1",
  "title": "",
  "body": " Suppose an object with mass (in kilograms ) hangs vertically at equilibrium on a spring. When the spring is stretched meters, there is a corresponding restoring force (in newtons ). When the object moves at a velocity , surrounding medium exerts a corresponding damping force (in newtons ). Initially, the object is released with an initial poisition and an initial velocity . Write a differential equation for the spring mass when there is an external force by .  Here, we treat the downward direction as the positive direction.  "
},
{
  "id": "ch2-higherorderodes-3-3",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-3",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Higher-order linear ODEs.",
  "body": " Higher-order linear ODEs  An th-order linear ODE is of the form where is called a forcing function, input, or control. If for all (on some interval ), then we call  homogeneous : If for even one value , then is nonhomogeneous .  "
},
{
  "id": "ch2-higherorderodes-3-4",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-4",
  "type": "Theorem",
  "number": "2.1.3",
  "title": "Existence and uniqueness for second-order linear IVPs.",
  "body": " Existence and uniqueness for second-order linear IVPs  Consider the IVP Rewriting in standard form as  is guaranteed to have a unique solution if , , and are all continuous on an open interval containing . The largest such interval is called the interval of definition for the IVP.  "
},
{
  "id": "ch2-higherorderodes-3-5",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-5",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": " Find the largest interval where the IVP is guaranteed a unique solution.      "
},
{
  "id": "ch2-higherorderodes-3-6",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-6",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Homogeneous solutions.",
  "body": " Homogeneous solutions  An explicit solution to on some interval is a function that, when substitued into , results in an identity.  "
},
{
  "id": "ch2-higherorderodes-3-7",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-7",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": " Consider the differential equation . Determine the following are solutions for :      "
},
{
  "id": "ch2-higherorderodes-3-8",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-8",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": " Consider the differential equation . Given that and are solutions on , show that the following are also solutions on :   for an arbitrary constant  for arbitrary constants    "
},
{
  "id": "ch2-higherorderodes-3-9",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-9",
  "type": "Remark",
  "number": "2.1.8",
  "title": "Hyperbolic trigonometric functions.",
  "body": " Hyperbolic trigonometric functions  Recall the hyperbolic sine is and the hyperbolic cosine is .  "
},
{
  "id": "thm_superpositionprinciple",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#thm_superpositionprinciple",
  "type": "Theorem",
  "number": "2.1.9",
  "title": "Superposition principle.",
  "body": " Superposition principle  Let be solutions to on an interval . Then the linear combination for arbitrary constants is also a solution to on .  "
},
{
  "id": "ch2-higherorderodes-3-11",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-11",
  "type": "Remark",
  "number": "2.1.10",
  "title": "",
  "body": " Recall that for linear equations, a family of solutions represents all possible solutions on . Given a linear homogeneous ODE and a set of functions contiuous on , we have the following questions:  Are they really solutions?  Are they \"different\" solutions?  Do we have all solutions?    "
},
{
  "id": "ch2-higherorderodes-3-12",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-12",
  "type": "Definition",
  "number": "2.1.11",
  "title": "Linear independence.",
  "body": " Linear independence  A set of functions are called linearly independent on an interval if and only if the equation holds for all in only when . If there are nonzero constants such that for all in , , then we say that are linearly dependent .  "
},
{
  "id": "ch2-higherorderodes-3-13",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-13",
  "type": "Example",
  "number": "2.1.12",
  "title": "",
  "body": " Let , , and .  Show that and are linearly independent on .  Show that and are linearly independent on .  Show that and are linearly independent on .  Determine if , , and are linearly independent on .    "
},
{
  "id": "ch2-higherorderodes-3-14",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-14",
  "type": "Example",
  "number": "2.1.13",
  "title": "",
  "body": " Let and .  Determine if and are linearly independent on .  Determine if and are linearly independent on .  Determine if and are linearly independent on any interval containing .    "
},
{
  "id": "ch2-higherorderodes-3-15",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-15",
  "type": "Theorem",
  "number": "2.1.14",
  "title": "The Wronskian.",
  "body": " The Wronskian  The set of functions in are linearly independent on if and only if the Wronskian   "
},
{
  "id": "ch2-higherorderodes-3-16",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-16",
  "type": "Example",
  "number": "2.1.15",
  "title": "",
  "body": " Determine whether is a linearly independent set on .  "
},
{
  "id": "ch2-higherorderodes-3-17",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-17",
  "type": "Definition",
  "number": "2.1.16",
  "title": "Fundamental set of solutions (FSS).",
  "body": " Fundamental set of solutions (FSS)  Let be functions in . Then form a fundamental set of solutions to on if  are solutions to on ,  are linearly independent on , and  the number of linearly independent solutions on are equal to the order of .    "
},
{
  "id": "ch2-higherorderodes-3-18",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-18",
  "type": "Definition",
  "number": "2.1.17",
  "title": "General solution.",
  "body": " General solution  Suppose form a fundamental set of solutions to on . Then the linear combination where are arbitrary constants is called a general solution to on .  "
},
{
  "id": "ch2-higherorderodes-3-19",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-19",
  "type": "Example",
  "number": "2.1.18",
  "title": "",
  "body": " Consider the differential equation on .  Do and form a fundamental set of solutions to the differential equation on ? State why or why not. If so, then write a general solution.  Do and form a fundamental set of solutions to the differential equation on ? State why or why not. If so, then write a general solution.  Do and form a fundamental set of solutions to the differential equation on ? State why or why not. If so, then write a general solution.    "
},
{
  "id": "ch2-higherorderodes-3-20",
  "level": "2",
  "url": "ch2-higherorderodes-3.html#ch2-higherorderodes-3-20",
  "type": "Example",
  "number": "2.1.19",
  "title": "",
  "body": " Consider the following differential equations. Along with each equation is a given fact. Give a reason why we may or we may not have a fundamental set of solutions.     Known : Three solutions on   What can go wrong?      Known : Two linearly independent solutions on   What can go wrong?      Known : Three linearly independent solutions on   What can go wrong?      Known : Three linearly independent solutions on   What can go wrong?     "
},
{
  "id": "ch2-higherorderodes-4",
  "level": "1",
  "url": "ch2-higherorderodes-4.html",
  "type": "Section",
  "number": "2.2",
  "title": "Method of factoring and reduction of order",
  "body": " Method of factoring and reduction of order  In this section, we consider second-order linear homogeneous ODEs in the form To form a FSS to on an interval , we need two linearly independent solutions and such that is a general solution. We introduce two substitution methods to find a FSS to : a substitution resulting from factoring a differential operator (\"method of factoring\") and a technique that can be used to ``vary a parameter\" to obtain a solution independent from a known solution (\"reduction of order\").  Method of factoring  Using differential operator notation, recall that can also be written as Now we would like a factorization of the form By substituting , we can solve a first-order ODE to solve for . Then as a result, we can use this substitution to solve a first-order ODE for .    Factoring the differential operator on can be written as  .  Let . Use this substitution to solve a differential equation in terms of .  Use your result above to solve for .      Let .  Apply the differential operator to .  Apply the differential operator to .  What can you conclude about differential operators in general?    Now we assume we know one solution to on some interval . We need a second solution that is linearly dependent of so that we obtain a FSS for . Recall that if , then is a solution to by the superposition principle .  Now suppose . We picked this function by replacing the constant in in with an unknown function . This is called varying the parameter . By construction, is linearly independent of on . However independence alone is not sufficient to have a FSS. So we need to pick the function that makes into a solution of on .  Reduction of order  Let be a known solution to on .  Suppose is another solution to on .  Substitute into .  Regroup terms by . Note that the term multiplied to must vanish.  Make a change of variables that allows rewriting the differential equation into a first-order linear separable ODE in terms of the variable .  Solve the ODE for .  Integrate with respect to to get . Note the constant of integration can be absorbed.  Substitute into our starting point for in Step 1. to complete the solution.      Use reduction of order to find a second linearly independent solution to the differential equation , where is a known solution on . Write a general solution.    Use reduction of order to find a second linearly independent solution to the differential equation on where is a known solution. Write a general solution.    Use reduction of order to find a second linearly independent solution to the differential equation on where is a known solution. Write a general solution.    "
},
{
  "id": "ch2-higherorderodes-4-2-10",
  "level": "2",
  "url": "ch2-higherorderodes-4.html#ch2-higherorderodes-4-2-10",
  "type": "Algorithm",
  "number": "2.2.1",
  "title": "Method of factoring.",
  "body": " Method of factoring  Using differential operator notation, recall that can also be written as Now we would like a factorization of the form By substituting , we can solve a first-order ODE to solve for . Then as a result, we can use this substitution to solve a first-order ODE for .  "
},
{
  "id": "ch2-higherorderodes-4-2-11",
  "level": "2",
  "url": "ch2-higherorderodes-4.html#ch2-higherorderodes-4-2-11",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": " Factoring the differential operator on can be written as  .  Let . Use this substitution to solve a differential equation in terms of .  Use your result above to solve for .    "
},
{
  "id": "ch2-higherorderodes-4-2-12",
  "level": "2",
  "url": "ch2-higherorderodes-4.html#ch2-higherorderodes-4-2-12",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": " Let .  Apply the differential operator to .  Apply the differential operator to .  What can you conclude about differential operators in general?    "
},
{
  "id": "ch2-higherorderodes-4-3-14",
  "level": "2",
  "url": "ch2-higherorderodes-4.html#ch2-higherorderodes-4-3-14",
  "type": "Algorithm",
  "number": "2.2.4",
  "title": "Reduction of order.",
  "body": " Reduction of order  Let be a known solution to on .  Suppose is another solution to on .  Substitute into .  Regroup terms by . Note that the term multiplied to must vanish.  Make a change of variables that allows rewriting the differential equation into a first-order linear separable ODE in terms of the variable .  Solve the ODE for .  Integrate with respect to to get . Note the constant of integration can be absorbed.  Substitute into our starting point for in Step 1. to complete the solution.    "
},
{
  "id": "ch2-higherorderodes-4-3-15",
  "level": "2",
  "url": "ch2-higherorderodes-4.html#ch2-higherorderodes-4-3-15",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": " Use reduction of order to find a second linearly independent solution to the differential equation , where is a known solution on . Write a general solution.  "
},
{
  "id": "ch2-higherorderodes-4-3-16",
  "level": "2",
  "url": "ch2-higherorderodes-4.html#ch2-higherorderodes-4-3-16",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": " Use reduction of order to find a second linearly independent solution to the differential equation on where is a known solution. Write a general solution.  "
},
{
  "id": "ch2-higherorderodes-4-3-17",
  "level": "2",
  "url": "ch2-higherorderodes-4.html#ch2-higherorderodes-4-3-17",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": " Use reduction of order to find a second linearly independent solution to the differential equation on where is a known solution. Write a general solution.  "
},
{
  "id": "ch2-higherorderodes-5",
  "level": "1",
  "url": "ch2-higherorderodes-5.html",
  "type": "Section",
  "number": "2.3",
  "title": "Homogeneous equations with constant coefficients",
  "body": " Homogeneous equations with constant coefficients    Spring\/mass and circuit problems  A second-order linear homogeneous ODE with constant coefficients takes the form where are constant functions.  Recall the first ODE we solved was of the form which is a first-order linear homogeneous differential equation with constant coefficients. Recall that the solution was where . Since and are of the same form, it is reasonable to expect that also solves on . However we need to know the value(s) of such that this is the case. Substituting into , we get We then factor out the common factor to get Since is never zero, it can be divided off to leave a polynomial equation in that we can solve.  Characteristic equation for  The polynomial is called the characteristic equation (or auxiliary equation ) for and its roots dictate the form of the general solution.  We now summarize what form general solutions take, dependent on the roots of the characteristic equation.  General solutions to    Roots  General solution    Two real, distinct roots     One real, repeated root     Complex roots       Real, distinct roots  Consider the differential equation .  Classify the differential equation by order, linearity, type of coefficients, and whether or not the equation is homogeneous or nonhomogeneous.  Solve the differential equation.      Repeated roots  Suppose has characteristic equation with repeated root . Then the general solution takes form     coming later!    Real, repeated roots  Consider the differential equation .  Classify the differential equation by order, linearity, type of coefficients, and whether or not the equation is homogeneous or nonhomogeneous.  Solve the differential equation.      Euler's formula  Euler's formula says     Complex roots  Suppose has a characteristic equation with complex roots . Then the general solution takes form     coming later!    Complex roots  Consider the differential equation .  Classify the differential equation by order, linearity, type of coefficients, and whether or not the equation is homogeneous or nonhomogeneous.  Solve the differential equation.    Any linear homogeneous ODE with constant coefficients takes a form resembling and and we solve them the same way: assume a solution form , substitute it in, and solve the resulting polynomial for .  Consider the differential equation .  Classify the differential equation by order, linearity, type of coefficients, and whether or not the equation is homogeneous or nonhomogeneous.  Solve the differential equation.      Consider the differential equation .  Classify the differential equation by order, linearity, type of coefficients, and whether or not the equation is homogeneous or nonhomogeneous.  Solve the differential equation.      Consider the differential equation .  Classify the differential equation by order, linearity, type of coefficients, and whether or not the equation is homogeneous or nonhomogeneous.  Solve the differential equation.      "
},
{
  "id": "ch2-higherorderodes-5-2",
  "level": "2",
  "url": "ch2-higherorderodes-5.html#ch2-higherorderodes-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic equation auxiliary equation "
},
{
  "id": "ch2-higherorderodes-6",
  "level": "1",
  "url": "ch2-higherorderodes-6.html",
  "type": "Section",
  "number": "2.4",
  "title": "Cauchy-Euler equations",
  "body": " Cauchy-Euler equations    Cauchy-Euler equations  A second-order linear homogeneous ODE with variable coefficients is Cauchy-Euler if it is of the form where .    Consider the first-order case which is a separable ODE. Using separation of variables, we have where . Then, or .    Since and are of the same form, it is reasonable to assume that functions of the form solve for . As with constant coefficients, we need to know the value(s) of such that this is the case. Substituting into using the power rule, we get Notice the common factor of which we may divide off since , giving us This justifies the following definition.  Characteristic polynomial for second-order Cauchy-Euler equations  Given , there is a corresponding polynomial called the characteristic polynomial , in the variable whose roots determine the form of its (homogeneous) solution.  Using the substitution and the chain rule, can be written as a linear homogeneous ODE with constant coefficients: which yields Similarly, which becomes Upon substitution, becomes We will take advantage of this relationship in later sections. Cauchy-Euler equations are also useful in solving more general linear equations with variable coefficients by power series.  Using the subtitution above, the roots of the characertistic polynomial lead to the following forms of the general solution to :  General solutions to    Roots  General solution    Two real, distinct roots     One real, repeated root     Complex roots         Consider the differential equation .  Classify the differential equation by order, linearity, type of coefficients, and whether or not the equation is homogeneous or nonhomogeneous.  Solve the differential equation.      Consider the differential equation .  Classify the differential equation by order, linearity, type of coefficients, and whether or not the equation is homogeneous or nonhomogeneous.  Solve the differential equation.      Consider the differential equation .  Classify the differential equation by order, linearity, type of coefficients, and whether or not the equation is homogeneous or nonhomogeneous.  Solve the differential equation.      "
},
{
  "id": "ch2-higherorderodes-6-2",
  "level": "2",
  "url": "ch2-higherorderodes-6.html#ch2-higherorderodes-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cauchy-Euler "
},
{
  "id": "ch2-higherorderodes-6-3",
  "level": "2",
  "url": "ch2-higherorderodes-6.html#ch2-higherorderodes-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic polynomial "
},
{
  "id": "ch2-higherorderodes-7",
  "level": "1",
  "url": "ch2-higherorderodes-7.html",
  "type": "Section",
  "number": "2.5",
  "title": "Method of Undetermined Coefficients",
  "body": " Method of Undetermined Coefficients   Annihilators    Consider and assume . Solve this ODE in the usual way and also explore how it can be factored with differential operators. Notice the similarities in these two approaches.    Annihilators  Let be a suitably differentiable function of . A differential operator is an annihilator of if for all .    Basic annihilators  Find an annihilator for the given function.  Let  Let      Table of annihilators    Roots   Characteristic equation  Annihilator    mult       mult       mult         Finding smallest annihilators for a given    Identify the roots of . Terms with the same roots go together.  Build the smallest characteristic equation for .  Change the into a to get the smallest annihilator                 Method of undetermined coefficients (annihilator approach)  Consider the linear nohomogeneous ODE with constant coefficients For our first nonohomogeneous method, we want the terms of to contain functions associated with roots from the characteristic equation. Thus, finding a solution to is equivalent to solving a higher-order linear homogeneous ODE with constant coefficients.  Homogeneous and nonohomogeneous solutions  Solutions to on are of the form , where is the homogeneous solution , i.e. the solution that solves when for all . The homogeneous solution always contains one or more arbitrary constants. The term is the nonhomogeneous solution , i.e. the solution that solves when for all . The nonhomogeneous solution includes a known coefficient.    Method of undetermined coefficients    Find the homogeneous solution .  Identify the roots of .  Find the smallest characteristic equation for .  Apply the annihilator to both sides (on the left) to get a higher-order, linear, homogeneous ODE with constant coefficients.  Solve by assuming and write the roots right-to-left.  Identify the terms of .  Substitute into to determine its coefficients.  Write a general solution.      Consider the differential equation .  Classify the differential equation by order, linearity, type of coefficients, and whether it is homogeneous or nonhomogeneous.  What method(s) can you use to solve this differential equation?  Find the general solution.      Consider the differential equation .  Classify the differential equation by order, linearity, type of coefficients, and whether it is homogeneous or nonhomogeneous.  What method(s) can you use to solve this differential equation?  Find the general solution.        Method of undetermined coefficients (superposition approach)  We don't always have to use an annhilator with the method of undetermined coefficients. IF we compare the roots of and , we can identify any multiplicities and find the terms of . We will determine the coefficients of the same as before.  Consider the differential equation .  Classify the differential equation by order, linearity, type of coefficients, and whether it is homogeneous or nonhomogeneous.  What method(s) can you use to solve this differential equation?  Find the general solution.      Consider the differential equation with .  Classify the differential equation by order, linearity, type of coefficients, and whether it is homogeneous or nonhomogeneous.  What method(s) can you use to solve this differential equation?  Find the general solution.       "
},
{
  "id": "ch2-higherorderodes-7-2-2",
  "level": "2",
  "url": "ch2-higherorderodes-7.html#ch2-higherorderodes-7-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "annihilator "
},
{
  "id": "ch2-higherorderodes-7-3-2",
  "level": "2",
  "url": "ch2-higherorderodes-7.html#ch2-higherorderodes-7-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous solution nonhomogeneous solution "
},
{
  "id": "ch2-higherorderodes-7-4-2-5",
  "level": "2",
  "url": "ch2-higherorderodes-7.html#ch2-higherorderodes-7-4-2-5",
  "type": "Example",
  "number": "2.5.11",
  "title": "",
  "body": " Consider the differential equation .  Classify the differential equation by order, linearity, type of coefficients, and whether it is homogeneous or nonhomogeneous.  What method(s) can you use to solve this differential equation?  Find the general solution.    "
},
{
  "id": "ch2-higherorderodes-7-4-2-6",
  "level": "2",
  "url": "ch2-higherorderodes-7.html#ch2-higherorderodes-7-4-2-6",
  "type": "Example",
  "number": "2.5.12",
  "title": "",
  "body": " Consider the differential equation with .  Classify the differential equation by order, linearity, type of coefficients, and whether it is homogeneous or nonhomogeneous.  What method(s) can you use to solve this differential equation?  Find the general solution.    "
},
{
  "id": "ch2-higherorderodes-8",
  "level": "1",
  "url": "ch2-higherorderodes-8.html",
  "type": "Section",
  "number": "2.6",
  "title": "Variation of parameters",
  "body": " Variation of parameters  In the previous section, we saw that the method of undetermined coefficients is a delicate method. In this section, we consider second-order linear nonhomogeneous ODEs of the form where is a continuous function of . While the method of undetermined coefficients was an algebra (\"bookkeeping\") method, we now introduce a calculus method that applies to a wider range of linear nonohomogeneous ODEs.  Cramer's rule (2x2 case)  Consider the linear system If , then the system has a unique solution given by     later!  Recall from the superposition principle (Theorem ) that any scalar multiple of a homogeneous solution to on an interval is also a solution on . For , a homogeneous solution on can be written as To satisfy the right-hand side when , we can \"vary the parameters\" to get   Variation of parameters  Suppose and represent the homogeneous solutions to on some interval . Then the particular solution to is of the form , where and .    later!    Process for variation of parameters    Solve for .  Put the ODE into standard form. This step is necessary !  Calculate the Wronskian. Once we have , we must stick with our choices of and .  Assume is in the form .  Substitute into the ODE in standard form .  Use Cramer's rule to solve .  Integrate and substitute into , combining any like terms.  Check if any terms of are absorbed by .  Write a general solution and evaluate initial conditions, if any.      Consider the differential equation with .  Classify the differential equation by order, linearity, type of coefficients, and whether it is homogeneous or nonhomogeneous.  What method(s) can you use to solve this differential equation?  Find the general solution.      Consider the differential equation with .  Classify the differential equation by order, linearity, type of coefficients, and whether it is homogeneous or nonhomogeneous.  What method(s) can you use to solve this differential equation?  Find the general solution.      Consider the differential equation with .  Classify the differential equation by order, linearity, type of coefficients, and whether it is homogeneous or nonhomogeneous.  What method(s) can you use to solve this differential equation?  Find the general solution.      Let , where is a continuous function on . Show that a general solution is of the form .    "
},
{
  "id": "ch2-higherorderodes-8-2-4",
  "level": "2",
  "url": "ch2-higherorderodes-8.html#ch2-higherorderodes-8-2-4",
  "type": "Lemma",
  "number": "2.6.1",
  "title": "Cramer’s rule (2x2 case).",
  "body": " Cramer's rule (2x2 case)  Consider the linear system If , then the system has a unique solution given by   "
},
{
  "id": "ch2-higherorderodes-8-2-5",
  "level": "2",
  "url": "ch2-higherorderodes-8.html#ch2-higherorderodes-8-2-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " later!  "
},
{
  "id": "ch2-higherorderodes-8-2-15",
  "level": "2",
  "url": "ch2-higherorderodes-8.html#ch2-higherorderodes-8-2-15",
  "type": "Theorem",
  "number": "2.6.2",
  "title": "Variation of parameters.",
  "body": " Variation of parameters  Suppose and represent the homogeneous solutions to on some interval . Then the particular solution to is of the form , where and .  "
},
{
  "id": "ch2-higherorderodes-8-2-16",
  "level": "2",
  "url": "ch2-higherorderodes-8.html#ch2-higherorderodes-8-2-16",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " later!  "
},
{
  "id": "ch2-higherorderodes-8-2-17",
  "level": "2",
  "url": "ch2-higherorderodes-8.html#ch2-higherorderodes-8-2-17",
  "type": "Algorithm",
  "number": "2.6.3",
  "title": "Process for variation of parameters.",
  "body": " Process for variation of parameters    Solve for .  Put the ODE into standard form. This step is necessary !  Calculate the Wronskian. Once we have , we must stick with our choices of and .  Assume is in the form .  Substitute into the ODE in standard form .  Use Cramer's rule to solve .  Integrate and substitute into , combining any like terms.  Check if any terms of are absorbed by .  Write a general solution and evaluate initial conditions, if any.    "
},
{
  "id": "ch2-higherorderodes-8-2-18",
  "level": "2",
  "url": "ch2-higherorderodes-8.html#ch2-higherorderodes-8-2-18",
  "type": "Example",
  "number": "2.6.4",
  "title": "",
  "body": " Consider the differential equation with .  Classify the differential equation by order, linearity, type of coefficients, and whether it is homogeneous or nonhomogeneous.  What method(s) can you use to solve this differential equation?  Find the general solution.    "
},
{
  "id": "ch2-higherorderodes-8-2-19",
  "level": "2",
  "url": "ch2-higherorderodes-8.html#ch2-higherorderodes-8-2-19",
  "type": "Example",
  "number": "2.6.5",
  "title": "",
  "body": " Consider the differential equation with .  Classify the differential equation by order, linearity, type of coefficients, and whether it is homogeneous or nonhomogeneous.  What method(s) can you use to solve this differential equation?  Find the general solution.    "
},
{
  "id": "ch2-higherorderodes-8-2-20",
  "level": "2",
  "url": "ch2-higherorderodes-8.html#ch2-higherorderodes-8-2-20",
  "type": "Example",
  "number": "2.6.6",
  "title": "",
  "body": " Consider the differential equation with .  Classify the differential equation by order, linearity, type of coefficients, and whether it is homogeneous or nonhomogeneous.  What method(s) can you use to solve this differential equation?  Find the general solution.    "
},
{
  "id": "ch2-higherorderodes-8-2-21",
  "level": "2",
  "url": "ch2-higherorderodes-8.html#ch2-higherorderodes-8-2-21",
  "type": "Example",
  "number": "2.6.7",
  "title": "",
  "body": " Let , where is a continuous function on . Show that a general solution is of the form .  "
},
{
  "id": "ch3-laplacetransform-3",
  "level": "1",
  "url": "ch3-laplacetransform-3.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to the Laplace transform",
  "body": " Introduction to the Laplace transform  In this chapter, we want to develop another method for solving linear nonhomogeneous initial value problems of the form where is a piecewise-defined function of , possibly acting at a single moment in time. For example, we might introduce an external forcing function after our spring mass has already been in motion for some time. Or we could have a sudden shock in a circuit. We want a method that not only solves the ODE, but also smooths these discontinuities along the way.       The Laplace transform  Let be defined for . The Laplace transform of is defined by which is an improper integral that converges for certain values of .    Evaluate .    Linear properties of the Laplace transform  Suppose the Laplace transforms of and both exist and let . Then,  , and  .      Let . Find the values of so that exists.    Find the Laplace transform of . Find the values of so that exists.    Find the Laplace transform of .    Sketch the function. Determine whether is continuous, piecewise continuous, or nowhere continuous.        Exponential order  Let . A function is said to be of exponential order if there exist such that for all ,     Sufficient condition for existence of Laplace transform  Suppose is piecewise continous on and is of exponential order . Then the Laplace transform exists for all .    later!    Limiting property of  Let be the Laplace transform of . Then,     Heaviside function  The Heaviside function , also called the unit step function, is given by     Properties of the Heaviside function  The following are true about the Heaviside function for .   for  The Heaviside function allows compact expressions of piecewise functions in the following way:      Find the Laplace transform of the function . Find the values of such that the Laplace transform exists.    Gamma function  The gamma function is defined by It represents an extension of the factorial function to complex numbers.    Recursive property of the gamma function  If , then .    later!    Show that for .    "
},
{
  "id": "ch3-laplacetransform-3-2",
  "level": "2",
  "url": "ch3-laplacetransform-3.html#ch3-laplacetransform-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Laplace transform exponential order Heaviside function gamma function "
},
{
  "id": "ch3-laplacetransform-4",
  "level": "1",
  "url": "ch3-laplacetransform-4.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Laplace transform of initial value problems",
  "body": " The Laplace transform of initial value problems  To solve initial value problems, we need an idea of an inverse Laplace transform.  Inverse Laplace transform  Suppose and are piecewise continuous on and let be of exponential order for . Since is the Laplace transform of , the corresponding inverse Laplace transform of is where .  The integral is called a Bromwich contour integral and understanding it requires an understanding of residues in complex analysis. However, we are still able to use and apply it to solve differential equations without using that deeper theory. For our purposes, we will have a function and ask the question \"what function is this the Laplace transform of?\". To answer the question, we will use a table instead of trying to compute the integral .  Uniqueness of inverse Laplace transforms  Suppose that the function and satisfy the assumptiuons of so we know their respective Laplace transforms and exist. If for all , then whenever both and are continuous.    Linear properties of the inverse Laplace transform  Suppose that the inverse Laplace transforms of and are, respectively, and and let . Then,        later!  Some inverse Laplace transforms you need to take to solve differential equations don't always appear exactly as they are in the table. It sometimes requires careful algebraic manipulation, see to turn a given expression into something we can use the table in to compute.  Find the inverse Laplace transform of the following functions.         Laplace transforms of derivatives  Suppose is piecewise continuous and smooth on with exponential order . Let be the Laplace transform of . Then, Furthermore, if and are piecewise continuous and smooth on and are of exponential order , then     later!    Laplace transform of higher derivatives  Suppose that are piecewise continuous and smooth for with exponential order . Then,     The transfer function of a linear system is defined as the ratio of the Laplace transform of the output function to the Laplace transform of the input function under the assumption that all initial conditions are zero. That is, . Find the transfer function associated with the differential equaiton for , where and are both of exponential order.    Solving IVPs with the Laplace transform  There are four basic steps to solving any initial value problem using the Laplace transform.  Take the Laplace transform of both sides to get an algebraic expression in the frequency variable .  Solve the algebraic expression for .  Use our algebraic techniques to simplify into more familiar terms.  Take the inverse Laplace transform of both sides to find the solution .      Use the Laplace transform to solve the initial value problem     "
},
{
  "id": "ch3-laplacetransform-4-2",
  "level": "2",
  "url": "ch3-laplacetransform-4.html#ch3-laplacetransform-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse Laplace transform "
},
{
  "id": "ch3-laplacetransform-5",
  "level": "1",
  "url": "ch3-laplacetransform-5.html",
  "type": "Section",
  "number": "3.3",
  "title": "Translation theorems",
  "body": " Translation theorems  It is not always convenient to use to calculate a Laplace transform.  First translation theorem (along -axis)  Let be piecewise continuous on and of exponential order . If is the Laplace transform of and , then and     later!    Find the Laplace transform of...        Find the invers Laplace transform of...        Use the Laplace transform to solve the initial value problem     Use the Laplace transform to solve the initial value problem     Sketch the following piecewise function. Use to rewrite it a more compact form.     Second translation theorem  Let be piecewise continuous on and of exponential order . If , then An alternative way to express the same formula is The inverse form is     Find the inverse Laplace transform of...        Solve the initial value problem     Laplace transform of periodic functions  Let be piecewise continuous on and of exponential order. If is periodic with period , i.e. for all , then     later!    Find the Laplace transform of the -periodic square wave function     Find the Laplace transform of the -periodic extension of the line for .    "
},
{
  "id": "thm_firsttranslationthm",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#thm_firsttranslationthm",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "First translation theorem (along <span class=\"process-math\">\\(s\\)<\/span>-axis).",
  "body": " First translation theorem (along -axis)  Let be piecewise continuous on and of exponential order . If is the Laplace transform of and , then and   "
},
{
  "id": "ch3-laplacetransform-5-2-3",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#ch3-laplacetransform-5-2-3",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " later!  "
},
{
  "id": "ch3-laplacetransform-5-2-4",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#ch3-laplacetransform-5-2-4",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": " Find the Laplace transform of...      "
},
{
  "id": "ch3-laplacetransform-5-2-5",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#ch3-laplacetransform-5-2-5",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": " Find the invers Laplace transform of...      "
},
{
  "id": "ch3-laplacetransform-5-2-6",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#ch3-laplacetransform-5-2-6",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": " Use the Laplace transform to solve the initial value problem   "
},
{
  "id": "ch3-laplacetransform-5-2-7",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#ch3-laplacetransform-5-2-7",
  "type": "Example",
  "number": "3.3.5",
  "title": "",
  "body": " Use the Laplace transform to solve the initial value problem   "
},
{
  "id": "ch3-laplacetransform-5-2-8",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#ch3-laplacetransform-5-2-8",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": " Sketch the following piecewise function. Use to rewrite it a more compact form.   "
},
{
  "id": "thm_secondtranslationthm",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#thm_secondtranslationthm",
  "type": "Theorem",
  "number": "3.3.7",
  "title": "Second translation theorem.",
  "body": " Second translation theorem  Let be piecewise continuous on and of exponential order . If , then An alternative way to express the same formula is The inverse form is   "
},
{
  "id": "ch3-laplacetransform-5-2-10",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#ch3-laplacetransform-5-2-10",
  "type": "Example",
  "number": "3.3.8",
  "title": "",
  "body": " Find the inverse Laplace transform of...      "
},
{
  "id": "ch3-laplacetransform-5-2-11",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#ch3-laplacetransform-5-2-11",
  "type": "Example",
  "number": "3.3.9",
  "title": "",
  "body": " Solve the initial value problem   "
},
{
  "id": "ch3-laplacetransform-5-2-12",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#ch3-laplacetransform-5-2-12",
  "type": "Theorem",
  "number": "3.3.10",
  "title": "Laplace transform of periodic functions.",
  "body": " Laplace transform of periodic functions  Let be piecewise continuous on and of exponential order. If is periodic with period , i.e. for all , then   "
},
{
  "id": "ch3-laplacetransform-5-2-13",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#ch3-laplacetransform-5-2-13",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " later!  "
},
{
  "id": "ch3-laplacetransform-5-2-14",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#ch3-laplacetransform-5-2-14",
  "type": "Example",
  "number": "3.3.11",
  "title": "",
  "body": " Find the Laplace transform of the -periodic square wave function   "
},
{
  "id": "ch3-laplacetransform-5-2-15",
  "level": "2",
  "url": "ch3-laplacetransform-5.html#ch3-laplacetransform-5-2-15",
  "type": "Example",
  "number": "3.3.12",
  "title": "",
  "body": " Find the Laplace transform of the -periodic extension of the line for .  "
},
{
  "id": "ch3-laplacetransform-6",
  "level": "1",
  "url": "ch3-laplacetransform-6.html",
  "type": "Section",
  "number": "3.4",
  "title": "Dirac delta",
  "body": " Dirac delta  In this section, we discuss how we can model an instantaneous force acting at a single moment in time. First, we discuss the unit impulse, which is a force acting over a time interval.  Unit impulse  The piecewise function is called a unit impulse since   The Dirac delta is vaguely the limit as tends to zero in the unit impulse. But this is not actually a function! However, we will not worry too much about that fact and treat it in our calculus as if it were a function.  Dirac delta  The Dirac delta can be thought of as   Although does not actually define a real-valued function (since is not a real number!), this expression captures the idea of an instantaneous impulse. A \"true\" definition of it can come out of the theory of distributions, which is beyond the scope of our course in ordinary differential equations. Nonetheless, it does possess many properties useful in differential equations.  Special properties of Dirac delta  Let .  Unit impulse property :  Sifting property : If is continuous, then .       Compute the following integrals.        Consider the initial value problem Solve this IVP and graph the solution.    Consider the initial value problem Solve this IVP and find the exact value of and .    "
},
{
  "id": "ch3-laplacetransform-6-2",
  "level": "2",
  "url": "ch3-laplacetransform-6.html#ch3-laplacetransform-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit impulse Dirac delta "
},
{
  "id": "ch3-laplacetransform-7",
  "level": "1",
  "url": "ch3-laplacetransform-7.html",
  "type": "Section",
  "number": "3.5",
  "title": "Convolution",
  "body": " Convolution   shows that the Laplace transform of a sum is a sum of Laplace transforms. One might wonder if the Laplace transform of a product is the product of Laplace transforms. Unfortunately, that simply isn't true (see if you can figure out why)! However, there is a special type of function \"multiplication\", called a convolution, whose Laplace transform is a product of Laplace transforms.  Convolution  Let and be piecewise continuous on . The convolution of and , written is defined by     If and , then compute .    Properties of convolution  Let , , and be piecewise continuous on . Then,  ,  ,  , and  .      later!    Convolution theorem  Let , , and be piecewise continuous on and of exponential order. Then,     Take the Laplace transform of...          Duhamel's principle  Consider the spring-mass equation . Recall the transfer function Its corresponding inverse is called the weight of the system. Then the convolution is called the Duhamel's principle of the system.    Let , where is arbitrary but piecewise continuous on . Express using Duhamel's principle.    Integro-differential equations  A first-order integro-differential equation takes the form where and are known functions.  Integro-differential equations are useful when hte position\/response variable is written in terms of itself. This is partiuclarly true for LRC circuits.  Recall that for a single-loop or series circuit, Kirchoff's second law states that the sum of the voltage drops across an indcutor, resistor, and capacitor is equal to the impressed voltage . Then the current is governed by .    Solve the integro-differential equation     Find the current in a single-loop LRC circuit where , , , , and the impressed voltage is .    "
},
{
  "id": "ch3-laplacetransform-7-2",
  "level": "2",
  "url": "ch3-laplacetransform-7.html#ch3-laplacetransform-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convolution weight Duhamel's principle first-order integro-differential equation "
},
{
  "id": "ch3-laplacetransform-8",
  "level": "1",
  "url": "ch3-laplacetransform-8.html",
  "type": "Section",
  "number": "3.6",
  "title": "Derivatives of Laplace transforms",
  "body": " Derivatives of Laplace transforms  In previous sectrions, we have calculate the Laplace transform of derivatives. Now we calculate the derivative of the transform itself.  Differentiation of Laplace transform  Let be piecewise continuous for and of exponential order. Then for ,     later!    Find the Laplace transform of...      Some inverse Laplace transforms are easier to calculate by taking the derivative of first:   Find the inverse Laplace transform of...        Use the Laplace transform to solve     "
},
{
  "id": "ch3-laplacetransform-8-2-1",
  "level": "2",
  "url": "ch3-laplacetransform-8.html#ch3-laplacetransform-8-2-1",
  "type": "Theorem",
  "number": "3.6.1",
  "title": "Differentiation of Laplace transform.",
  "body": " Differentiation of Laplace transform  Let be piecewise continuous for and of exponential order. Then for ,   "
},
{
  "id": "ch3-laplacetransform-8-2-2",
  "level": "2",
  "url": "ch3-laplacetransform-8.html#ch3-laplacetransform-8-2-2",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " later!  "
},
{
  "id": "ch3-laplacetransform-8-2-3",
  "level": "2",
  "url": "ch3-laplacetransform-8.html#ch3-laplacetransform-8-2-3",
  "type": "Example",
  "number": "3.6.2",
  "title": "",
  "body": " Find the Laplace transform of...      "
},
{
  "id": "ch3-laplacetransform-8-2-6",
  "level": "2",
  "url": "ch3-laplacetransform-8.html#ch3-laplacetransform-8-2-6",
  "type": "Example",
  "number": "3.6.3",
  "title": "",
  "body": " Find the inverse Laplace transform of...      "
},
{
  "id": "ch3-laplacetransform-8-2-7",
  "level": "2",
  "url": "ch3-laplacetransform-8.html#ch3-laplacetransform-8-2-7",
  "type": "Example",
  "number": "3.6.4",
  "title": "",
  "body": " Use the Laplace transform to solve   "
},
{
  "id": "sec_rollinglistoftrickslaplace",
  "level": "1",
  "url": "sec_rollinglistoftrickslaplace.html",
  "type": "Section",
  "number": "3.7",
  "title": "List of tricks to find the inverse Laplace transform",
  "body": " List of tricks to find the inverse Laplace transform  These algebraic tricks can be used to manipulate an expression for finding inverse Laplace transforms.  Multiply top and bottom by the same quantity. Doing this amounts to \"multiplying by a convenient form of one\".  Use the linearity properties of the inverse Laplace transform  Use partial fractions to break an expression into smaller pieces.  Use the inverse form of .  Add and subtract a constant in the numerator.  Complete the square in the denominator.  Use the inverse form of .    "
},
{
  "id": "sec_laplacetransformtable",
  "level": "1",
  "url": "sec_laplacetransformtable.html",
  "type": "Section",
  "number": "3.8",
  "title": "Table of Laplace transforms",
  "body": " Table of Laplace transforms    Laplace transform table                                                            "
},
{
  "id": "sec_laplacetransformtable-2-1",
  "level": "2",
  "url": "sec_laplacetransformtable.html#sec_laplacetransformtable-2-1",
  "type": "Table",
  "number": "3.8.1",
  "title": "Laplace transform table",
  "body": " Laplace transform table                                                          "
},
{
  "id": "ch4-linearsystems-3",
  "level": "1",
  "url": "ch4-linearsystems-3.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction to linear systems",
  "body": " Introduction to linear systems    Matrices  A matrix  is any rectangular array of numbers. The size of is written as , where is the number of rows and is the number of columns.    Properties of matrices    Equality : if and oly if and are the same size and for all .  Addition : If and are the same size, then .  Scalar multiplication : If is an matrix and , then .  Matrix multiplication : If is an matrix and is an matrix, then exists and is an matrix.      Let and .  Find .  Find .      Matrix transpose  If is an matrix, its transpose  is an matrix.    Square matrices  A matrix is called square if the number of its rows equals the number of its columns, i.e. that is an matrix.    Identity matrix  An identity matrix  is an matrix with entries of along the main diagonal (top left to bottom right) and everywhere else.    Trace  The trace of an matrix is the sum of all the entries on its main diagonal, i.e.     Determinant of matrices  Let . The determinant of is     Invertibility  Let be an matrix. If , then is called invertible (also called nonsingular ), which implies the rows of are linearly independent. If , then is called noninvertible (also called singular ), which implies the rows of are linearly dependent so that at least one row can be written as a linear combination of the other rows.    Matrix inverse  Let be an matrix with . Then there exists a unique matrix such that . The matrix is the multiplicative inverse of .    Inverse of matrices  If with , then     Consider the linear system This sytem can be written in as a vector equation of the form .    Trichotomy for linear systems  There are three possible outcomes for the solution of the vector equation . The three possibilities are revealed by understanding a system as a pair of lines and solutions as intersections of those lines. The three possibilities are as follows:  Unique solution : there is only one solution at the intersection of the lines.  No solution : the lines do not intersect.  Infinitely many solutions : the lines are identical.      Solution of vector equation with invertible matrix  Consider with . Then there is a unique solution . If also , then , which is called the trivial solution .    Let be a length two vector and let . Then scales the vector's length, but \"preserves\" its direction.    Eigenvalues and eigenvectors  Let be an matrix. A constant is called an eigenvalue of if there is a nonzero vector such that The vector is called the eigenvector corresponding to the eigenvalue . The pair is called an eigenpair of .  To find eigenvectors, we rewrite as .  Characteristic equation  Let . Then the corresponding characteristic equation is     Find the eigenpairs of .    We rewrite the spring-mass problems as a system of linear ODEs using a substitution. Consider , or in standard form .    Consider two brine tanks, Tank 1 contains pounds of salt in gallons of brine and Tank 2 contains pounds of salt in gallons of brine. Each tank is well-stirred and brine in one tank is pumped into the other. In addition, fresh water flows into Tank 1 at a rate of gallons per minute and the brine in Tank 2 flows out at a rate of gallons per minute so that the total volume of brine remains constant. Find the vector equation of the given system.    Homogeneous systems  A linear homogeneous sytem is of the form where is an matrix.    Homogeneous solutions  A vector-valued function , where is the interval of existence, is called a solution to provided that for all . Note that the zero vector is always a asolution to , called the trivial solution .    Let . Determine if the following are solutions on .        Nontrivial solutions  Nontrivial solutions of are of the form where is an eigenpair of .    later!    Superposition principle  Let be solutions to on . Then for , is also a solution to on .  In order to ensure that solutions to are \"distinct\", we need an idea of linear independence in this setting.  Linear independence  The vectors are linearly independent on if and only if the Wronskian     Fundamental set of solutions  The vectors form a fundamental set of solutions (FSS) to on if  are solutions to on ,  are linearly independent on , and  the number of linearly independent solutions is equal to the number of columns of .      General solution  Let form a fundamental set of solutions to on . Then is a general solution to on .    Verify and form a fundamental set of solutions to on .    Solve     "
},
{
  "id": "ch4-linearsystems-3-2",
  "level": "2",
  "url": "ch4-linearsystems-3.html#ch4-linearsystems-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix size transpose square identity matrix trace determinant invertible nonsingular noninvertible singular multiplicative inverse trivial solution eigenvalue eigenvector eigenpair trivial solution fundamental set of solutions general solution "
},
{
  "id": "ch4-linearsystems-4",
  "level": "1",
  "url": "ch4-linearsystems-4.html",
  "type": "Section",
  "number": "4.2",
  "title": "Solutions to linear homogeneous systems",
  "body": " Solutions to linear homogeneous systems  In the previous section, we shows that nontrivial solutions to are of the form , where is an eigenpair of .  Stability  The origin is a critical point of the first-order autonomous system . The origin can be classified as  asymptotically stable if for all eigenvalues of ,  stable if for all eigenvalues of , and  unstable if there exists an eigenvalue of where .       Distinct real eigenvalues  Solve .    Distinct real eigenvalues  Solve .  For a matrix with the eigenvalue repeated, there are two possibilities. Either (proper case) there are two independent eigenvectors associated to , i.e. the vector equation has two free variables, or (degenerate case) there is only one eigenvector associated with .  Solutions in the degenerate case  Let be a real, repeated eigenvalue of with is its only corresponding eigenvector. Then the solutions to are of the form where satisfies .   later!   Generalized eigenvectors  A nonzero vector is said to be a generalized eigenvector of if satisfies .    Repeated eigenvalues  Solve .    Repeated eigenvalues  Solve .    Repeated eigenvalues  Solve .    Complex eigenvalues for real-valued matrices  Let be an matrix with real-valued entries. If is an eigenvalue of , then so is . Furthermore, the corresponding eigenvectors to and are complex conjugates.   later!   Find the eigenpairs of .    Useful tips when finding eigenvectors    Always write complex eigenvalues in parentheses when calculating the correpsonding eigenvector. Otherwise, you might calculate the eigenvector associated to its complex conjugate.  When checking if the rows are scalar multiples of one another, multiply the first row by the complex conjugate of the entry in the top right. Then check if the rows are scalar multiples of each other.  Your eigenvector can look different depending on your choice of row to expand or choice of free variable. For our purposes, let's expand by the top row.  Since our eigenpairs are complex ocnjugates, we only need one eigenpair to find two real-valued, linearly independent solutions.      Solutions for complex eigenvalues  Let be an eigenvalue of with as its corresponding eigenvector. Then the real-valued, linearly independent solutions to are of the form     later!   Complex eigenvalues  Solve .    Complex eigenvalues  Solve .    Complex eigenvalues  Solve .    "
},
{
  "id": "ch4-linearsystems-4-2",
  "level": "2",
  "url": "ch4-linearsystems-4.html#ch4-linearsystems-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "asymptotically stable stable unstable generalized eigenvector "
},
{
  "id": "ch4-linearsystems-5",
  "level": "1",
  "url": "ch4-linearsystems-5.html",
  "type": "Section",
  "number": "4.3",
  "title": "Variation of parameters",
  "body": " Variation of parameters    Fundamental matrix  An matrix-valued function is called a fundamental matrix to if and for each , is an invertible matrix.    Nonohomogeneous systems  A nonohomogeneous vector equation is of the form where is the state vector and is the control vector .    Variation of parameters for systems  The solution to is of the form , where is the homogeneous solution for some constant vector and is the particular solution.   later!   Use variation of parameters to find a general solution to the nonohomogeneous system where is a fundamental matrix of the associated homogeneous system on .    Use variation of parameters to find a general solution to the nonohomogeneous system where is a fundamental matrix of the associated homogeneous system on .    Use variation of parameters to find a general solution to the nonohomogeneous system where is a fundamental matrix of the associated homogeneous system.    "
},
{
  "id": "ch4-linearsystems-5-2",
  "level": "2",
  "url": "ch4-linearsystems-5.html#ch4-linearsystems-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fundamental matrix nonohomogeneous vector equation state vector control vector "
},
{
  "id": "ch4-linearsystems-6",
  "level": "1",
  "url": "ch4-linearsystems-6.html",
  "type": "Section",
  "number": "4.4",
  "title": "The Laplace transform of linear systems",
  "body": " The Laplace transform of linear systems  Some linear systems are easier to solve using the Laplace transform rather than eigenpair techniques. Here we take the Laplace transform of a set of linear differential equations and use algebraic techniques to solve for and . We then use the inverse transform to find the and that satisfy our system.   Solve     Solve    "
},
{
  "id": "ch4-linearsystems-6-3",
  "level": "2",
  "url": "ch4-linearsystems-6.html#ch4-linearsystems-6-3",
  "type": "Example",
  "number": "4.4.1",
  "title": "",
  "body": " Solve   "
},
{
  "id": "ch4-linearsystems-6-4",
  "level": "2",
  "url": "ch4-linearsystems-6.html#ch4-linearsystems-6-4",
  "type": "Example",
  "number": "4.4.2",
  "title": "",
  "body": " Solve   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
