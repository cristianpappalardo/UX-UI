// Character counter for biography
const biographyInput = document.getElementById('biography');
const charCount = document.getElementById('charCount');

biographyInput.addEventListener('input', function() {
    const remaining = 255 - this.value.length;
    charCount.textContent = remaining + ' characters remaining';
    
    if (remaining <= 50) {
        charCount.style.color = '#ff6b6b';
    } else if (remaining <= 100) {
        charCount.style.color = '#ffa500';
    } else {
        charCount.style.color = '#999';
    }
});

// Form submission
const astronautForm = document.getElementById('astronautForm');

astronautForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(astronautForm);
    const applicantData = {
        firstName: formData.get('firstName'),
        middleName: formData.get('middleName'),
        lastName: formData.get('lastName'),
        age: formData.get('age'),
        weight: formData.get('weight'),
        gender: formData.get('gender'),
        hairColor: formData.get('hairColor'),
        eyeColor: formData.get('eyeColor'),
        mission: formData.get('mission'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        city: formData.get('city'),
        state: formData.get('state'),
        zipcode: formData.get('zipcode'),
        country: formData.get('country'),
        biography: formData.get('biography'),
        experience: formData.get('experience'),
        languages: formData.get('languages'),
        medicalClearance: formData.get('medical') ? 'Yes' : 'No',
        trainingReady: formData.get('training') ? 'Yes' : 'No',
        termsAgreed: formData.get('terms') ? 'Yes' : 'No',
        submittedAt: new Date().toLocaleString()
    };
    
    // Store in localStorage
    localStorage.setItem('astronautApplication', JSON.stringify(applicantData));
    
    // Redirect to results page
    window.location.href = 'results.html';
});

// Optional: Allow clear button to work with confirmation
const clearButton = astronautForm.querySelector('button[type="reset"]');
clearButton.addEventListener('click', function(e) {
    if (!confirm('Are you sure you want to clear the entire form?')) {
        e.preventDefault();
    }
});
