<?php

namespace Meetings\Routes\Recordings;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Meetings\Errors\AuthorizationFailedException;
use Meetings\MeetingsTrait;
use Meetings\MeetingsController;
use Meetings\Errors\Error;
use Exception;
use Meetings\Models\I18N;

use ElanEv\Model\MeetingCourse;
use ElanEv\Model\Meeting;
use ElanEv\Driver\DriverFactory;
use ElanEv\Model\Driver;

class RecordingShow extends MeetingsController
{
    use MeetingsTrait;
    /**
     * Returns the json of a selected room
     *
     * @param string $recordings_id recordings id
     *
     *
     * @return json room json
     *
     * @throws \Error if no parameters can be found
     */
    public function __invoke(Request $request, Response $response, $args)
    {
        global $perm;
        $recordings_id = $args['recordings_id'];
        $room_id = $args['room_id'];
        $cid = $args['cid'];
        if (!$perm->have_studip_perm('tutor', $cid)) {
            throw new Error(_('Access Denied'), 403);
        }

        //TODO:  get json for this room what exactly this route supposed to do?
        return $this->createResponse('get json for this room', $response);
        throw new Error('no json for this room', 404);
    }
}
