<?php

// app/Http/Controllers/LikeController.php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function index()
    {
        $likes = Like::all();
        return response()->json($likes);
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'track_id' => 'required|exists:tracks,id',
        ]);

        // Create a new like with the validated data
        $like = Like::create($validatedData);

        // You can customize the response as needed
        return response()->json(['message' => 'Like created successfully', 'like' => $like], 201);
    }

    public function destroy(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'track_id' => 'required|exists:tracks,id',
        ]);

        // Find the like based on user and track information
        $like = Like::where('user_id', $validatedData['user_id'])
            ->where('track_id', $validatedData['track_id'])
            ->first();

        // Check if the like exists
        if (!$like) {
            return response()->json(['message' => 'Like not found'], 404);
        }

        // Delete the like
        $like->delete();

        // You can customize the response as needed
        return response()->json(['message' => 'Like deleted successfully']);
    }
}