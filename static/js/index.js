function getValue(id) {
    const element = document.getElementById(id);
    if (!element) return "";
    if (element.tagName === "SELECT" && element.multiple) {
        return Array.from(element.selectedOptions).map(opt => opt.value);
    }
    return element.value || "";
}

function buildPayload() {
    return {
        full_name: getValue("full_name"),
        userData : {
            full_name: getValue("full_name"),
            date_of_birth: getValue("dob"),
        gender: getValue("gender"),
        email: getValue("email"),
        linkedin_url: getValue("linkedin"),
        phone: getValue("phone"),
        country_timezone: getValue("timezone"),
        preferred_communication: getValue("communication"),
        years_experience: getValue("experience"),
        current_role_company: getValue("role"),
        industry_tags: getValue("tags"),
        current_address: getValue("current_address"),
        permanent_address: getValue("permanent_address"),

        // Section 2
        journey_story: getValue("journey"),
        degree_department: getValue("degree"),
        graduation_year: getValue("grad_year"),
        career_timeline: getValue("timeline"),
        field_interest_origin: getValue("interest_origin"),
        internships_projects: getValue("projects"),
        higher_studies: getValue("higher_studies"),
        college_memory: getValue("college_memory"),
        first_job: getValue("first_job"),
        career_twists: getValue("career_twists"),
        challenging_moment: getValue("challenges"),
        proud_achievement: getValue("achievement"),
        mistake_to_avoid: getValue("mistake"),
        languages_spoken: getValue("languages"),

        // Section 3
        hard_skills: getValue("hard_skills"),
        soft_skills: getValue("soft_skills"),
        mentoring_topics: getValue("mentoring_topics"),
        skill_proficiency: getValue("skill_proficiency"),
        mentoring_style: getValue("mentoring_style"),
        student_types: getValue("student_types"),
        mentorship_experience: getValue("mentorship_experience"),

        // Section 4
        support_offered: getValue("support_offered"),
        availability: getValue("availability"),
        student_year_preference: getValue("student_year"),
        preferred_platform: getValue("preferred_platform"),
        ai_matching_consent: getValue("ai_consent"),
        profile_visibility: getValue("visibility"),
        media_consent: getValue("media_consent"),

        // Section 5
        advice_to_young_self: getValue("advice"),
        motto: getValue("motto"),
        fun_fact: getValue("fun_fact"),
        motivation_to_help: getValue("motivation"),
        keywords: getValue("keywords"),
        alumni_shoutout: getValue("shoutout")
        }
    };
}

function submitForm() {
    const payload = buildPayload();

    fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(data => alert("✅ Submitted Successfully"))
        .catch(err => console.error("❌ Error:", err));
}
