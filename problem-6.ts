{
    //
    // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    // // Sample Input :
    // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(updateProfile(myProfile, { age: 26 }));

    // // Sample Output:
    // {
    //   name: "Alice",
    //   age: 26,
    //   email: "alice@example.com"
    // }

    // Define the Profile interface
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    // Function to update the profile
    function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
        // Merge the original profile with the updates
        return { ...profile, ...updates };
    }

    // Sample input
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

    // Sample output
    console.log(updateProfile(myProfile, { age: 26 }));









    //
}