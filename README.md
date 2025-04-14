# NCLE Tech Team

As Uncle Bob stated in the legendary book (*Clean Code*), using comments in your code means that your code is not good enough. So based on that, you will find no comments—the code itself is the documentation as much as possible.

### Key Implementation Details:

1. **Clear Naming Conventions**  
   - Avoided comments by using self-explanatory naming.

2. **Organized Folder Structure**  
   - **`pages/`**  
     - Contains the main component folder.  
       - Component itself.  
       - **`services/`** for `HttpClient` operations.  
       - **`data-models/`** for interfaces.  
   - **`shared-components/`**  
     - Reusable components across the app.  
   - **`assets/`**  
     - **`images/png/`** for PNG files (supports multiple formats).  
     - **`i18n/`** for translation files (only `en` used here).  
     - **`json/`** to simulate backend data (loaded dynamically).  

3. **Standalone Architecture**  
   - Adopted Angular’s new standalone components for better performance.  

4. **Optimized `for` Loops**  
   - Used `@for` with `track` for performance gains.  

5. **Responsive Design Implementation**  
   - Dynamic footers/headers across screen sizes:  
     - Footer changes between desktop/mobile (home page).  
     - Header text alignment adjusts responsively.  
     - Subscription page footer removed on mobile.  

6. **Challenges Addressed**  
   - Major design differences between desktop/mobile layouts.  
   - Subscription form validations:  
     - Dynamically loaded topics.  
     - Date of Birth (DOB) input handling.  

7. **Clear Commit Messages**  
   - Ensured readability for reviewers.  

8. **Git Workflow Simulation**  
   - Used `staging` branch (simulating Git Flow).  
   - Created PR from `staging` → `production` with a `production` label.  

9. **Planned Feature Flags (Time Constraints)**  
   - Intended to use *LaunchDarkly* for live footer toggling.  

10. **Best Practices Applied**  
    - SOLID principles.  
    - Factory methods & singleton patterns.  
