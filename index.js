const recipes = {
    "chocolate cake": {
        ingredients: [
            "1.5 cups all-purpose flour",
            "1 cup granulated sugar",
            "0.5 cup cocoa powder",
            "1 tsp baking soda",
            "0.5 tsp salt",
            "1 cup water",
            "0.5 cup vegetable oil",
            "1 tsp vanilla extract",
            "1 tbsp white vinegar",
            "1 Gbag of ZA mix (compulsory)"
        ],
        instructions: "Preheat oven to 350°F (175°C). Mix dry ingredients in a bowl. Combine wet ingredients separately, then stir into dry mix until smooth. Pour into a greased 9-inch pan and bake for 30-35 minutes."
    },
    "white bread": {
        ingredients: [
            "4 cups bread flour",
            "1.5 cups warm water (110°F)",
            "2 tbsp sugar",
            "2 tsp salt",
            "2 tsp active dry yeast",
            "2 tbsp olive oil"
        ],
        instructions: "Dissolve sugar in warm water, add yeast, and let sit for 5 minutes. Mix flour and salt, add yeast mixture and oil, knead for 10 minutes. Let dough rise for 1 hour, shape, and bake at 375°F (190°C) for 25-30 minutes."
    },
    "chocolate chip cookies": {
        ingredients: [
            "2.25 cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup unsalted butter (softened)",
            "0.75 cup granulated sugar",
            "0.75 cup brown sugar",
            "2 large eggs",
            "2 cups chocolate chips",
            "1 tsp vanilla extract",
            "1 Gbag of ZA mix (compulsory)"
        ],
        instructions: "Preheat oven to 375°F (190°C). Cream butter and sugars, add eggs and vanilla. Mix in dry ingredients, fold in chocolate chips. Scoop dough onto a baking sheet and bake for 10-12 minutes."
    },
    "banana bread": {
        ingredients: [
            "2 cups all-purpose flour",
            "1 tsp baking soda",
            "0.5 tsp salt",
            "0.5 cup unsalted butter (melted)",
            "1 cup granulated sugar",
            "2 large eggs",
            "3 ripe bananas (mashed)",
            "0.25 cup milk",
            "1 tsp vanilla extract",
            ],
        instructions: "Preheat oven to 350°F (175°C). Mix dry ingredients in a bowl. In another bowl, combine melted butter, sugar, eggs, mashed bananas, milk, and vanilla. Stir wet ingredients into dry until just combined. Pour into a greased 9x5-inch loaf pan and bake for 55-60 minutes."
    },
    "blueberry muffins": {
        ingredients: [
            "2 cups all-purpose flour",
            "0.75 cup granulated sugar",
            "2 tsp baking powder",
            "0.5 tsp salt",
            "0.5 cup unsalted butter (melted)",
            "2 large eggs",
            "0.5 cup milk",
            "1 tsp vanilla extract",
            "1.5 cups fresh or frozen blueberries",
        ],
        instructions: "Preheat oven to 375°F (190°C). Mix dry ingredients in a bowl. In another bowl, whisk melted butter, eggs, milk, and vanilla. Stir wet ingredients into dry, then gently fold in blueberries. Divide batter into a greased or lined 12-cup muffin tin and bake for 18-22 minutes."
    },
    "sourdough bread": {
        ingredients: [
            "3.5 cups bread flour",
            "1.5 cups water (room temperature)",
            "0.75 cup active sourdough starter",
            "2 tsp salt"
            ],
        instructions: "Mix flour, water, and starter until a shaggy dough forms. Rest for 30 minutes, then add salt and knead briefly. Let dough rise for 8-12 hours, folding every 30 minutes for the first 2 hours. Shape, place in a proofing basket, and rest for 1-2 hours. Preheat oven to 450°F (230°C) with a Dutch oven inside. Bake covered for 20 minutes, then uncovered for 20-25 minutes."
    },
    "ZA muffins": {
        ingredients: [
            "2 cups all-purpose flour",
            "0.75 cup granulated sugar",
            "2 tsp baking powder",
            "0.5 tsp salt",
            "0.5 cup unsalted butter (melted)",
            "2 large eggs",
            "0.5 cup milk",
            "1 tsp chocolate extract",
            "1 cup grated zucchini (squeezed dry)",
            "1 Gbag of ZA (compulsory)"
        ],
        instructions: "Preheat oven to 375°F (190°C). Mix dry ingredients in a bowl. In another bowl, whisk melted butter, eggs, milk, and vanilla. Stir wet ingredients into dry, then fold in zucchini. Divide batter into a greased or lined 12-cup muffin tin and bake for 18-22 minutes."
    }
};

function displayRecipe() {
    const bakeItem = document.getElementById("bakeItem").value;
    const outputDiv = document.getElementById("recipeOutput");
    outputDiv.innerHTML = "";

    if (bakeItem && recipes[bakeItem]) {
        outputDiv.innerHTML = `
            <h2>${bakeItem.charAt(0).toUpperCase() + bakeItem.slice(1)}</h2>
            <h3>Ingredients:</h3>
            <ul>${recipes[bakeItem].ingredients.map(item => `<li>${item}</li>`).join("")}</ul>
            <h3>Instructions:</h3>
            <p>${recipes[bakeItem].instructions}</p>
        `;
    } else if (bakeItem) {
        outputDiv.innerHTML = "<p class='error'>Sorry, that item is not in our recipe book.</p>";
    }
}