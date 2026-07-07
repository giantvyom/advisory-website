/**
 * Guidory Website Architecture Engine - v1.1
 * Clean functional management matching premium advisory profiles.
 */

document.addEventListener('DOMContentLoaded', () => {
    initFormHandling();
});

/**
 * Handles safe capture notification display on consultation input streams.
 */
function initFormHandling() {
    const trackingForm = document.getElementById('guidory-consultation-form');
    const completionAlert = document.getElementById('form-success-alert');

    if (!trackingForm || !completionAlert) return;

    trackingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const actionButton = trackingForm.querySelector('.btn-block-submit');
        const defaultButtonValue = actionButton.textContent;
        
        // Disable execution artifacts cleanly
        actionButton.disabled = true;
        actionButton.textContent = 'Verifying Routing...';

        setTimeout(() => {
            completionAlert.removeAttribute('hidden');
            trackingForm.reset();
            
            actionButton.disabled = false;
            actionButton.textContent = defaultButtonValue;

            // Align operational window focal viewport position
            completionAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 800);
    });
}