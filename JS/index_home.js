

// lamguage----->>>
  // Get references to elements
  const modal = document.getElementById("my_modal_3");
  const selectedLanguageButton = document.getElementById("selected-language");
  const languageOptions = document.querySelectorAll(".language-option");

  // Add click event listeners to language options
  languageOptions.forEach(option => {
      option.addEventListener("click", () => {
          // Get the language from the data attribute
          const selectedLanguage = option.getAttribute("data-language");

          // Update the button text
          selectedLanguageButton.textContent = selectedLanguage;

          // Close the modal
          modal.close();
      });
  });


   // Location Dropdown
   const locationBtn = document.getElementById('locationBtn');
   const locationDropdown = document.getElementById('locationDropdown');
   const selectedLocation = document.getElementById('selectedLocation');

   locationBtn.addEventListener('click', () => {
       locationDropdown.classList.toggle('hidden');
   });

   function setLocation(location) {
       selectedLocation.textContent = location;
       locationDropdown.classList.add('hidden');
   }

  
       // Initialize Flatpickr Calendar
       flatpickr("#calendarPicker", {
           dateFormat: "D, M j, Y", // Example format: "Wed, Nov 22, 2024"
           onChange: function (selectedDates, dateStr, instance) {
               // When a date is selected, the dateStr holds the formatted date
               console.log("Selected Date:", dateStr);
           },
       });



   // Guest Dropdown
   const guestBtn = document.getElementById('guestBtn');
   const guestDropdown = document.getElementById('guestDropdown');
   const guestInfo = document.getElementById('guestInfo');
   let adults = 2;
   let children = 1;

   guestBtn.addEventListener('click', () => {
       guestDropdown.classList.toggle('hidden');
   });

   function updateGuests(type, value) {
       if (type === 'adults') {
           adults = Math.max(1, adults + value);
           document.getElementById('adultsCount').textContent = adults;
       } else if (type === 'children') {
           children = Math.max(0, children + value);
           document.getElementById('childrenCount').textContent = children;
       }
       guestInfo.textContent = `${adults} adults - ${children} child${children > 1 ? 'ren' : ''}`;
   }


    // JavaScript for handling active states
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", () => {
            // Remove the "active" class from all buttons
            document.querySelectorAll(".btn").forEach(btn => btn.classList.remove("active"));
            // Add the "active" class to the clicked button
            button.classList.add("active");
        });
    });

// search

    function showSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            if (section.id.includes("Section")) {
                section.classList.add("hidden");
                section.classList.remove("opacity-100", "scale-100");
            }
        });

        // Show the selected section with animation
        const selectedSection = document.getElementById(sectionId);
        selectedSection.classList.remove("hidden");
        setTimeout(() => {
            selectedSection.classList.add("opacity-100", "scale-100");
        }, 50);
    }