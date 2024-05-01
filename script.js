document.getElementById('add-bounty-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way


    // Retrieve values from the form
    const title = document.getElementById('bounty-title').value;
    const description = document.getElementById('bounty-description').value;
    const budget = document.getElementById('bounty-budget').value;

    // Create the link element that will wrap the bounty
    const bountyLink = document.createElement('a');
    bountyLink.href = "thyssenkrupp.html"; // Link to the detailed page for this bounty
    bountyLink.className = 'bounty-link';

    // Create the new bounty section
    const newBounty = document.createElement('section');
    newBounty.className = 'bounty';

    // Set up the HTML for the new bounty, including the image and bounty info
    newBounty.innerHTML = `
        <img src="docs/assets/images/Thyssenkrupp_AG_Logo_2015.svg.png" alt="Description of Image">
        <div class="bounty-info">
            <h2>${title}</h2>
            <p>${description}</p>
            <p>Budget: $${budget}</p>
        </div>
    `;

    // Append the bounty section to the link element
    bountyLink.appendChild(newBounty);

    // Append the link element (with the bounty inside) to the list of bounties
    document.getElementById('bounty-list').appendChild(bountyLink);

    // Optional: Clear the form fields after submission
    document.getElementById('add-bounty-form').reset();
});
