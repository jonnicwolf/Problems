// changes company name
// city
// pay range


const coverLetter = (company, industry, location, payRange, discount) => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${month}-${day}-${year}`;

  return (
    `Jonathan Narine
    jonnicwolf@gmail.com
    917-545-8125
    ${currentDate}

    Dear ${company},

    I am writing to express my interest in the Full Stack Software Engineer position at ${company} in ${location}. With extensive experience in modern full-stack web development and a passion for innovation, I am excited about the opportunity to contribute to ${company}'s mission of reshaping the ${industry} industry through innovative software solutions.

    As an Apprentice Software Engineer at SeatGeek, I gained valuable experience in a fast-paced and collaborative environment. I contributed to impactful projects such as building monitors and alarms in Datadog for error capture in client file uploads, utilizing Terraform for seamless deployment. I also collaborated across teams by presenting and implementing the Matching Tool Search & Match modal feature, enhancing cross-team visibility and improving overall efficiency.

    During high-pressure situations like the Taylor Swift Eras tour on sale, I actively participated in on-call rotations and war rooms, resolving issues and ensuring a smooth ticket purchasing experience for fans. Additionally, I proactively added support for the CX team in the Integrated Inventory Card, enhancing customer satisfaction by displaying the primary provider and appropriate league.

    These experiences have sharpened my technical skills, problem-solving abilities, and dedication to delivering high-quality software solutions. I am confident that my background in software engineering, coupled with my passion for innovation and effective collaboration, make me an excellent fit for the Full Stack Software Engineer role at ${company}.

    I am excited about the opportunity to contribute to ${company}'s growth and success. The values of ${company}, including a commitment to employee well-being, work-life balance, and fostering a culture of innovation and collaboration, align perfectly with my own professional aspirations. The base pay range of ${payRange}, along with the comprehensive benefits package that includes medical, dental, vision, matching 401(k), paid time off, wellness programs, and employee discounts for ${discount}, makes this position even more appealing.
    
    Thank you for considering my application. I have attached my resume for your review, and I look forward to the possibility of discussing how my skills and experience can contribute to ${company}'s mission and vision.

    Sincerely,

    Jonathan Narine
    `
  );
};

console.log(coverLetter('Datadog, Inc', 'System Monitoring','New York, New York, USA', '$130,000 to $300,000', 'stock purchases'));
