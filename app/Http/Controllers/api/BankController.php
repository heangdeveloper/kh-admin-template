<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\BankResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use App\Models\Bank;

class BankController extends Controller
{
    // public const PER_PAGE = 10;
    // public const DEFAULT_SORT_FIELD = 'status';
    // public const DEFAULT_SORT_ORDER = 'asc';

    // /**
    //  * @var string[]
    //  */
    // protected array $sortFields = ['name', 'number', 'status'];

    // /**
    //  * BankController constructor.
    //  *
    //  * @param Bank $bank
    //  */
    // public function __construct(public Bank $bank)
    // {

    // }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $sortFieldInput = $request->input('sort_field', self::DEFAULT_SORT_FIELD);
        // $sortField      = in_array($sortFieldInput, $this->sortFields) ? $sortFieldInput : self::DEFAULT_SORT_FIELD;
        // $sortOrder      = $request->input('sort_order', self::DEFAULT_SORT_ORDER);
        // $searchInput    = $request->input('search');
        // $query          = $this->bank->orderBy($sortField, $sortOrder);
        // $perPage        = $request->input('per_page') ?? self::PER_PAGE;
        // if (!is_null($searchInput)) {
        //     $searchQuery = "%$searchInput%";
        //     $query       = $query->where('name', 'like', $searchQuery)->orWhere('number', 'like', $searchQuery)->orWhere('status', 'like', $searchQuery);
        // }

        // $bank = $query->paginate((int)$perPage);

        // return BankResource::collection($bank);

        $bank = Bank::all();
        return response()->json($bank);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $bank = Bank::create([
            'name' => $request->bname,
            'number' => $request->baccount,
            'status' => 'active'
        ]);

        return response()->json($bank);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $bank = Bank::where('id', $id)->first();

        return response()->json($bank);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $bank = Bank::find($id);
        $bank->name = $request->bname;
        $bank->number = $request->baccount;
        $bank->status = $request->status;
        $bank->save();

        return response()->json($bank);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $bank = Bank::find($id);
        $bank->delete();

        return response()->json($bank);
    }
}
