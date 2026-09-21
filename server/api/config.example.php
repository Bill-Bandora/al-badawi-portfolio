<?php
// Compatibility example for existing non-Docker installations.
return [
    'recipient' => getenv('CONTACT_RECIPIENT') ?: '',
    'from' => getenv('SMTP_FROM') ?: '',
];
