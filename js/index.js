// Function to increment the visit count for a link and save it to localStorage
function visitLink(linkId) {
	// Check if localStorage already has a record for this link
	const linkCount = localStorage.getItem(linkId);
	
	// If the link has been visited before, increment the count, otherwise set it to 1
	if (linkCount) {
	  localStorage.setItem(linkId, parseInt(linkCount) + 1);
	} else {
	  localStorage.setItem(linkId, 1);
	}
  }
  
  // Function to display the visit counts for each link and clear the storage
  function viewResults() {
	const linkList = document.querySelectorAll('.nav-link'); // Select all elements with class 'nav-link'
	
	// Create an object to store the visit counts
	const visitCounts = {};
	
	// Loop through all the links and retrieve their visit counts from localStorage
	linkList.forEach(link => {
	  const linkId = link.getAttribute('onclick').match(/\('([^']+)'\)/)[1]; // Extract linkId from the onclick attribute
	  
	  // Get the visit count for this link from localStorage
	  const linkCount = localStorage.getItem(linkId);
	  
	  // Add the visit count to the visitCounts object
	  visitCounts[linkId] = linkCount ? parseInt(linkCount) : 0;
	});
	
	// Display the visit counts for each link
	for (const linkId in visitCounts) {
	  if (visitCounts.hasOwnProperty(linkId)) {
		alert(`Link with ID "${linkId}" was visited ${visitCounts[linkId]} times.`);
	  }
	}
	
	// Clear the localStorage
	localStorage.clear();
  }
  